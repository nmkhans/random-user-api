const express = require("express");
const { getAllUser, getRandomUser } = require("../controllers/users.controller");

const router = express.Router();

//? get all user
router.get("/all", getAllUser)

//? get random user
router.get("/random", getRandomUser)

module.exports = router