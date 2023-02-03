const fs = require("fs")
const path = require("path")
const router = require("../routes/user.route")

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

//? save a user
module.exports.saveUser = async (req, res) => {
    const dataModel = ["id", "gender", "name", "contact", 'address', "photoUrl"]
    const dataArray = Object.keys(req.body)

    dataModel.forEach(element => {
        if (!dataArray.includes(element)) {
            return res.status(500).json({
                success: false,
                message: "Please provide all data"
            })
        }
    })

    const newData = req.body;
    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userData = JSON.parse(data)
            userData.push(newData)
            const userDataString = JSON.stringify(userData)

            fs.writeFile(path.join(__dirname, "../../db/data.json"), userDataString, (error, data) => {
                if (!error) {
                    res.status(201).json({
                        success: true,
                        message: "New user saved"
                    })
                }
            })
        }
    })
}

//? update a user
module.exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userList = JSON.parse(data)
            const userData = userList.find(user => user.id === parseInt(id))

            if (!userData) {
                return res.status(404).json({
                    success: false,
                    message: `No user found with id ${id}`
                })
            }
        }
    })

    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userList = JSON.parse(data)
            const userData = userList.find(user => user.id === parseInt(id))
            const userPosition = userList.indexOf(userData)
            userList.splice(userPosition, 1, newData)
            const userListString = JSON.stringify(userList)

            fs.writeFile(path.join(__dirname, "../../db/data.json"), userListString, (error, data) => {
                if (!error) {
                    res.status(201).json({
                        success: true,
                        message: "User updated."
                    })
                }
            })
        }
    })
}

//? delete a user
module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userList = JSON.parse(data)
            const userData = userList.find(user => user.id === parseInt(id))

            if (!userData) {
                return res.status(404).json({
                    success: false,
                    message: `No user found with id ${id}`
                })
            }
        }
    })

    fs.readFile(path.join(__dirname, "../../db/data.json"), "utf-8", (error, data) => {
        if (!error) {
            const userList = JSON.parse(data)
            const userData = userList.find(user => user.id === parseInt(id))
            const userPosition = userList.indexOf(userData)
            userList.splice(userPosition, 1)
            const userListString = JSON.stringify(userList)

            fs.writeFile(path.join(__dirname, "../../db/data.json"), userListString, (error, data) => {
                if (!error) {
                    res.status(201).json({
                        success: true,
                        message: "User deleted."
                    })
                }
            })
        }
    })
}