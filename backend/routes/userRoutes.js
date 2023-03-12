const express = require('express');
const userRouter = express.Router();
const { loginUser, registerUser, getUsers, getSingleUser, updateUser, deleteUser } = require('../controller/userController')

userRouter.post("/login", loginUser)
userRouter.post("/register", registerUser)
userRouter.get("/get", getUsers)
userRouter.get("/get/:id", getSingleUser)
userRouter.patch("/update/:id", updateUser)
userRouter.delete("/delete/:id", deleteUser)

module.exports = userRouter;