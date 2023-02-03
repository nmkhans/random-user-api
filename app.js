const express = require("express");
const userRoute = require("./src/routes/user.route")
const defaultRoute = require("./src/routes/default.route")

//? app configuration
const app = express();
app.use(express.json())

//? handle routes
app.use("/api/v1", defaultRoute)
app.use("/api/v1/user", userRoute)

//? handle undefined routes
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route was not found!"
    })
})

module.exports = app
