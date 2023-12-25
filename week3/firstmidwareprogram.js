// Using middlewares for
// 1. Authenticating the user
// 2. Validating the inputs

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//First Middleware
app.use(express.json()) // Used to parse Incoming JSON in request body

app.get("/", (req,res)=> {
    
})