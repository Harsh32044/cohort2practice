const jwt = require('jsonwebtoken')
import { Request, Response } from 'express'
require('dotenv').config

const authMiddleWare = (req:any, res:Response, next: any) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.toString().startsWith('Bearer ') ? authHeader.split(' ')[1] : null

    if (token == null) {
        res.status(400).json({
            message: "Invalid or Missing Token."
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.username = decoded.username
        next()
    }
    catch (err) {
        next(err)
        return res.status(400).json({
            message: "Please check the token"
        })
    }
}

export default authMiddleWare