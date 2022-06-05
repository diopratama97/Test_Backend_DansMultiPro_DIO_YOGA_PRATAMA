"use strict";

let response = require("../res");
let axios = require("axios");
const { jobs, is_uuid } = require("../helper/validations");

exports.listJobs = async (req, res) => {
  try {
    const { description, location, fulltime, page } = await jobs.validateAsync(
      req.query
    );
    const desc = description ? `description=${description}` : "";
    const loc = location ? `location=${location}` : "";
    const fullTime = fulltime ? `fulltime=${fulltime}` : "";
    const pagination = page ? `page=${page}` : "";

    axios
      .get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${desc}&${loc}&${fullTime}&${pagination}`
      )
      .then((resp) => {
        return response.ok(resp.data, res);
      })
      .catch((error) => {
        return response.err(error.message, res);
      });
  } catch (error) {
    return response.err(error.message, res);
  }
};

exports.detailJob = async (req, res) => {
  try {
    const { id } = await is_uuid.validateAsync(req.query);
    axios
      .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
      .then((resp) => {
        return response.ok(resp.data, res);
      })
      .catch((error) => {
        return response.err(error.message, res);
      });
  } catch (error) {
    return response.err(error, res);
  }
};
