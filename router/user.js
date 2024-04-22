const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/usercontroller')


userRouter.get('/login',userController.userLoginPage)



module.exports = userRouter