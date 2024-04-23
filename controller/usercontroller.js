



const userLoginPage = async(req,res)=>{
    try{
        res.render('user/login')

    }catch(err){
        console.log(err.message)
    }
}

const userRegisterPage = async(req,res)=>{
    try{
        res.render('user/register')
    }catch(error){
        console.error(error.message)
    }
}




module.exports = {
    userLoginPage,
    userRegisterPage
}