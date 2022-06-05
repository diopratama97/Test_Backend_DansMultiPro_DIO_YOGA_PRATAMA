const express = require("express");
const router = express.Router();
const verifikasi = require("./verification");

const job = require("../controller/jobs");

//users
router.get("/jobs", verifikasi(), job.listJobs);
router.get("/job-detail", verifikasi(), job.detailJob);

module.exports = router;
