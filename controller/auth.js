let md5 = require("md5");
let response = require("../res");
let jwt = require("jsonwebtoken");
let knex = require("../config/db/conn");
const { v4: uuidv4 } = require("uuid");
const {
  loginValidation,
  registrasiValidation,
} = require("../helper/validations");
require("dotenv").config();

//controller untuk register
exports.registrasi = async (req, res) => {
  try {
    const { name, email, password, gender, phone_number, username } =
      await registrasiValidation.validateAsync(req.body);
    const post = {
      id: uuidv4(),
      name: name,
      email: email,
      password: md5(password),
      gender: gender,
      phone_number: phone_number,
      username: username,
    };

    const queryCekemail = await knex("user")
      .select("email")
      .where("email", post.email)
      .whereNull("deleted_at")
      .first();

    const queryCekUsername = await knex("user")
      .select("username")
      .whereRaw(`LOWER(username) LIKE ?`, [`%${post.username}%`])
      .whereNull("deleted_at")
      .first();

    if (queryCekemail || queryCekUsername) {
      return response.duplikat("Username/Email sudah tersedia", res);
    }

    const queryInsert = await knex("user").insert(post);
    return queryInsert
      ? response.ok("Registrasi Berhasil", res)
      : response.err("Registrasi gagal!", res);
  } catch (error) {
    return response.err(error.message, res);
  }
};

//controler login
exports.login = async (req, res) => {
  try {
    const { username, password } = await loginValidation.validateAsync(
      req.body
    );

    const queryLogin = await knex("user")
      .select("*")
      .where({
        username: username,
        password: md5(password),
        deleted_at: null,
      })
      .first();

    if (!queryLogin) {
      return response.errLogin("Email atau Password Salah!", res);
    }

    const accessToken = jwt.sign(
      { queryLogin },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { queryLogin },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await knex("user")
      .update("refresh_token", refreshToken)
      .where("id", queryLogin.id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("userInfo", queryLogin, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return response.Login(accessToken, queryLogin.id, res);
  } catch (error) {
    return response.err(error, res);
  }
};

exports.Logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await knex("user")
      .select("*")
      .where("refresh_token", refreshToken)
      .first();

    if (!user) return res.sendStatus(204);

    await knex("user").update("refresh_token", null).where("id", user.id);
    res.clearCookie("refreshToken");
    res.clearCookie("userInfo");
    return response.ok("Logout Berhasil", res);
  } catch (error) {
    return response.err(error, res);
  }
};

exports.tokenRefresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await knex("user")
      .select("*")
      .where("refresh_token", refreshToken)
      .first();

    if (!user) return res.sendStatus(403);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
          { user },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "7d",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    return response.err(error, res);
  }
};
