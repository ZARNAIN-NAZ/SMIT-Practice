// function signUp(username, email, password, confirmPassword) {
//   if (username.trim() === "" || password.trim() === "") {
//     return "username and password required";
//   }
//   if (password !== confirmPassword) {
//     return "Password do not match";
//     // alert("Password do not match")
//   } else {
//     return "sign-up successful!";
//     // alert("succesfull")
//   }
// }
// const signUpButton = document.querySelector("#sign-up");
// signUpButton.addEventListener("click", function () {
//   // return 'you are signed in!'
//   alert("hi");
// // console.log('hi');
// });

// const username = "myusername";
// const email = "myemail";
// const password = "mypassword";
// const confirmPassword = "myconfirmPassword";
// const result = signUp(username, email, password, confirmPassword);
// console.log(result);


const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("click",(event)=>{
    event.preventDefault()
    
 Validite()
})
const sendData =(usernameVal ,state , Count)=>{
    if(sRate ===Count){
        swal(`hello ${usernameVal} u r registred , success`)
    }
}
const SuccessMsg=(usernameVal)=>{
    let formCont =document.querySelector(".form-control")
    var Count = formCont.length-1;
    for(var i=0;i<formCont.length;i++){
        if(formCont[i].className==='form-control success'){
            var state = 0 +1;
            console.log(state);
            sendData(usernameVal ,state , Count)
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal)=>{
    var atSymbol = emailVal.indexOf('@')
if(atSymbol <1)return false;
var dot = emailVal.lastIndexOf('.')
if(dot<=atSymbol +2)return false;
if(dot===emailVal.length-1)return false;
return true;
}

function Validite() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const confirmPasswordVal = confirmPassword.value.trim()
//username
    if(usernameVal===''){
        setErrorMsg(username , "username can't be empty")
    }
    else if(usernameVal.length<=2){
        setErrorMsg(username , 'min 3 char')
    }
    else{
        setSuccessMsg(username)
    }
    //email
    if(emailVal===''){
        setErrorMsg(email , "email can't be empty")
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email ,'email is not valid')
    }
    else{
        setSuccessMsg(email)
    }

    //password
    if(passwordVal===''){
        setErrorMsg(password , "password can't be blank")
    }
    else if(passwordVal.length<=7){
        setErrorMsg(password ,'min 8 char')
    }
    else{
        setSuccessMsg(password)
    }

    // confirm password
    if(confirmPasswordVal===''){
        setErrorMsg(confirmPassword , "password can't be blank")
    }
    else if(passwordVal != confirmPasswordVal){
        setErrorMsg(confirmPassword ,'not matched')
    }
    else{
        setSuccessMsg(confirmPassword)
    }
    SuccessMsg(usernameVal)

      
}
function setErrorMsg(input , errorMsgs) {
    const formControl = input.parentElement;
    const small =formControl.querySelector('small')
    formControl.className ='form-control error'
    small.innerText=errorMsgs  
}
function setSuccessMsg(input) {
   const formControl = input.parentElement;
   formControl.className='form-control success'

    
}
