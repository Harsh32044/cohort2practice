//

const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: "harshsriv@gmail.com",
        password: "123",
        name: "Harsh Srivastav"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman Singh"
    },
    {
        username: "harshikha@gmail.com",
        password: "123321",
        name : "Harshikha Chandra"
    }
]

function userExists(username, password) {
    // Returns true if a user with given username,password exists in ALL_USERS, false otherwise
    return ALL_USERS.some(elem => elem.username === username && elem.password === password)
}

app.post("/signin", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User Not Present in our memory DB"
        })
    }

    let token = jwt.sign({username: username}, jwtPassword)

    return res.json({
        token,
    })
})

app.get("/users", (req,res) => {
    const token  = req.headers.authorization
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const usernamedecoded = decoded.username
        return res.json(ALL_USERS.filter(user => user.username != usernamedecoded))
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3000)