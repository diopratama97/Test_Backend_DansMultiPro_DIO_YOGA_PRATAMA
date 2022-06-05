"use strict";

module.exports = (app) => {
  const home = require("../controller/index");
  const auth = require("../controller/auth");
  //home
  app.route("/").get(home.index);

  //auth
  app.route("/auth/register").post(auth.registrasi);
  app.route("/auth/login").post(auth.login);
  app.route("/auth/logout").get(auth.Logout);
  app.route("/auth/refreshToken").get(auth.tokenRefresh);
};
