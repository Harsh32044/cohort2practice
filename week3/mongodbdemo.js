//Using MongoDB via mongoose

// const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
// const jwt = require("jsonwebtoken")
// const jwtPassword = "123456"


mongoose.connect(process.env.MONGODB_URI.concat("/justdemo"))

const User = mongoose.model("Users", { // Users Table 
    name : String,
    username: String,
    password: String
})

const user = new User({
    name: "Harshikha Chandra",
    username: "harshsriv7",
    password: "password2197"
})

user.save().then(doc => console.log("Object saved proper successfully", doc))
.catch(err => console.log("Error while saving object to DB", err))
