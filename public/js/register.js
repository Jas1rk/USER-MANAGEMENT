function clrname(){
    document.getElementById('nameerror').textContent = ""
}
function clremail(){
    document.getElementById('emailerror').textContent = ""
}
function clrmobile(){
    document.getElementById('mobileerror').textContent = ""
}
function clrpassword(){
    document.getElementById('passworderror').textContent = ""
}
function clrconfirmpass(){
    document.getElementById('confirmpassworderror').textContent = ""
}

function register(){
   const username = document.getElementById('username').value.trim()
   const email = document.getElementById('email').value.trim()
   const mobile = document.getElementById('mobile').value.trim()
   const password = document.getElementById('password').value.trim()
   const confimPassword = document.getElementById('confirm password').value.trim()

    const fillingError = document.getElementById('fillerror')
    const usernameError = document.getElementById('nameerror')
    const emailError = document.getElementById('emailerror')
    const mobileError = document.getElementById('mobileerror')
    const passwordError = document.getElementById('passworderror')
    const confirmPasswordError = document.getElementById('confirmpassworderror')
    
    fillingError.textContent = ""
    usernameError.textContent = ""
    emailError.textContent = ""
    mobileError.textContent = ""
    passwordError.textContent = ""
    confirmPasswordError.textContent = ""

    if(username === ""){
        usernameError.textContent = "Username is required"
    }else if(username.length <2 ){
        usernameError.textContent = 'Username must be atleast 2 charechter'
    }else if(!/^[A-Z][a-zA-Z0-9]*$/.test(username)){
        usernameError.textContent = 'Invalid format First letter should be capital'
    }


    if(email === ""){
        emailError.textContent = "Email is required"
    }else if (!/^([a-zA-Z0-9._-]+)@([a-zA-Z.-]+).([a-zA-z]{2,4})$/ .test(email)){
        emailError.textContent = 'Enter a valid email'
    }

    if (mobile === "") {
        mobileError.textContent = "Mobile is required";
    } else if (!/^\d{10}$/.test(mobile)) {
        mobileError.textContent = "Enter a valid 10-digit number";
    }

    if(password === ""){
        passwordError.textContent = "Password is required"
    }else if(!/[a-zA-Z]/.test(password)||!/\d/.test(password)){
        passwordError.textContent = "Password should contain Numbers and Alphabets"
    }else if(password.length < 6){
        passwordError.textContent = "Password should be 6 charecteres"
    }
  
    if(confimPassword === ""){
       confirmPasswordError.textContent = "Cofirmpassrd is required"
    }else if(confimPassword !== password){
        confirmPasswordError.textContent = "Both passwords do not match"
    }

    if(usernameError.textContent!==""||emailError.textContent!==""||mobileError.textContent!==""||passwordError.textContent!==""||confirmPasswordError.textContent!==""){
        fillingError.textContent = "Enter all fields"
        setTimeout(() => {
            fillingError.textContent = ""
        },3000);
    }else{
   
          $.ajax({
            url:'/user/register',
            method:'post',
            data:{
                username,
                email,
                mobile,
                password,
                confimPassword
            },
            success:(response)=>{
                
                
                if(response.status === 'exist'){
                
                    const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    console.log(Toast)
                    Toast.fire({
                    icon: "warning",
                    title: "You have already registered",
                    

                    });
                }else if(response.status === 'createdNewUser'){
                    window.location.href = `/user/login?newUser=true`
                }
            }
       })
   }

}