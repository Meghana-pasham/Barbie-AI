const express = require("express");

const {
  saveProfile,
  getProfile,
} = require("../controllers/profileController");

const router = express.Router();

router.post("/", saveProfile);

router.get("/", getProfile);

module.exports = router;