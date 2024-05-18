const url = new URLSearchParams(window.location.search)
const registered = url.get('newUser')
if(registered === 'true'){
    Toastify({
        text: "You saved successfully!",
        duration: 2000, 
        close: true, 
        gravity: "center", 
        backgroundColor: "#33cc33", 
    }).showToast();
}

function login(){
    
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    
    $.ajax({
        url:'/user/login',
        method:'post',
        data:{
            email,password
        }
    })
    

}
