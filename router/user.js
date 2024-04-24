const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/usercontroller')


userRouter.get('/login',userController.userLoginPage)
userRouter.get('/register',userController.userRegisterPage)
userRouter.post('/register',userController.userRegisterPost)



module.exports = userRouter