// Use of zod, input validation library

// Input Validations

const express = require("express")
const zod = require("zod")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

const arraySchema = zod.array(zod.number())
// Let's say we have input like this
/*  
    {
        email: string (looks like email)
        password: string (atleast 8 chars)
        country: "IN" or "US"
    }
 */
const objectSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    country: zod.literal("INR").or(zod.literal("US"))

})

// Write a function that validates whether an input is an array of strings; true if yes false otherwise
function validateInput(inputArr) {
    const stringArrSchema = zod.array(zod.string())
    const comparisonRes = stringArrSchema.safeParse(inputArr)

    return comparisonRes.success
}

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const response = arraySchema.safeParse(kidneys)
    if (!response.success) {
        res.status(400).json({
            msg: "Wrong Inputs!"
        })
    }

    res.send( {
        response
    })
})

// Global Catches - Error handling middlewares. 

// app.use((err, req, res, next) => {
//     res.json({
//         message : "Oops! It's not you, it's us."
//     })
// })

app.listen(port)