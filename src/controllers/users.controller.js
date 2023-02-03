const fs = require("fs")
const path = require("path")

//? get all users
module.exports.getAllUser = async (req, res) => {
    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userData = JSON.parse(data)
            return res.status(200).json({
                success: true,
                message: "All user data",
                data: userData
            })
        }
    })
}

//? get a single random user
module.exports.getRandomUser = async (req, res) => {
    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userData = JSON.parse(data)
            const randomUser = Math.round(Math.random() * userData.length)
            const randomUserdata = userData[randomUser]
            
            res.status(200).json({
                success: true,
                message: "Random user Data",
                data: randomUserdata
            })
        }
    })

}