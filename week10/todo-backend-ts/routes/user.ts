import express, { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const userRoute: Router = express.Router();
import zod from "zod";
const jwt = require("jsonwebtoken");
require("dotenv").config();
import authMiddleWare from '../middleware'

const prisma = new PrismaClient();
userRoute.use(express.json());

userRoute.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "I am From the user route handler user.ts. Using ts-node-ss",
  });
});

const creationObj = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(8),
});

userRoute.post("/create", async (req: Request, res: Response) => {
  const { username, firstName, lastName, password } = req.body;

  const { success } = creationObj.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message:
        "Wrong inputs! Username is mandatory and Password must be of minimum 8 digits!",
    });
  }
  const user = await prisma.user.create({
    data: req.body,
    select: {
      username: true,
      firstName: true
    },
  });

  const token = jwt.sign({
    username: user.username
  }, process.env.JWT_SECRET)

  return res.status(200).json({
    message: "User created successfully",
    token: token
  });
});

userRoute.delete("/", authMiddleWare , async (req:any, res: Response) => {

  const username = req.username

  await prisma.user.delete({
    where: {
      username: username
    }
  })

  return res.status(200).json({
    message: "Deleted successfully"
  })
});

export default userRoute;
