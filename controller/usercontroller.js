



const userLoginPage = async(req,res)=>{
    try{
        res.render('user/login')

    }catch(err){
        console.log(err.message)
    }
}


module.exports = {
    userLoginPage
}