const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/usercontroller')

const{homePage,
    userLoginPage,
    userRegisterPage,
    userRegisterPost}=userController

userRouter.get('/home',homePage)
          .get('/login',userLoginPage)
          .get('/register',userRegisterPage)
          .post('/register',userRegisterPost)






module.exports = userRouter