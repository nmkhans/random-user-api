const express = require("express");
const {
    getAllUser,
    getRandomUser,
    saveUser,
    updateUser,
    deleteUser
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

//? delete a user
router.delete("/delete/:id", deleteUser)

module.exports = router