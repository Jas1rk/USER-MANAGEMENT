const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type:String,

    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User