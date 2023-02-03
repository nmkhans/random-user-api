const express = require("express");
const {
    getAllUser,
    getRandomUser,
    saveUser
} = require("../controllers/users.controller");

const router = express.Router();

//? get all user
router.get("/all", getAllUser)

//? get random user
router.get("/random", getRandomUser)

//? save a user
router.post("/save", saveUser)

module.exports = router