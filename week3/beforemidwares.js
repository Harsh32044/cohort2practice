const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get("/health-checkup", (req, res) => {
    //Authentication
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if (username != "Harsh" || password != "123") {

        res.status(400).json({
            msg: "Wrong Inputs!"
        })
        return
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Wrong Inputs!"
        })
        return

    }
    res.status(200).json({
        msg: "Your Kidney is fine!"
    })
})

app.listen(port)

//For Every endpoint, we would have to write the same
//authentication code again and again