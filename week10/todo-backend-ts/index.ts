import express, { Express, Request, Response } from 'express'
import userRoute from './routes/user'
const port = process.env.PORT || 3000

const app: Express = express()
app.use("/users",userRoute)

app.get("/", (req:Request, res: Response) => {
    return res.json({
        message: "Response received"
    })
})

app.listen(port, () => {
    console.log(`[Server]: Server is running on port number ${port}`);
})