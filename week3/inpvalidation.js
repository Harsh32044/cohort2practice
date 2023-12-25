// Input Validations

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    if (!kidneys || !Array.isArray(kidneys)) {
        res.status(403).json({
            msg: "Invalid Inputs"
        })
        return
    }
    const kidneyLength = kidneys.length

    res.json({
        msg: "You no. of kidneys is ".concat(kidneyLength)
    })
})

// Global Catches - Error handling middlewares

app.use((err, req, res, next) => {
    res.json({
        message : "Oops! It's not you, it's us."
    })
})

app.listen(port)