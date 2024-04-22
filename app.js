const express = require('express')
const app =  express()
const session = require('express-session')
const userRoute = require('./router/user')
const adminRoute = require('./router/admin')
const dotenv = require('dotenv')
const mongodb = require('./config/db')
dotenv.config()
mongodb()

app.set('view engine','ejs')

app.use(express.static('views'))
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'12HDJS@$#%',
    resave:false,
    saveUninitialized:true
}))


app.use('/user',userRoute)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('server is running on');
})





