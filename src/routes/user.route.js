const express = require("express");
const {
    getAllUser,
    getRandomUser,
    saveUser,
    updateUser
} = require("../controllers/users.controller");

const router = express.Router();

//? get all user
router.get("/all", getAllUser)

//? get random user
router.get("/random", getRandomUser)

//? save a user
router.post("/save", saveUser)

//? update a user
router.put("/update/:id", updateUser)

module.exports = router