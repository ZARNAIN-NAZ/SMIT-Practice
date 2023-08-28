function validateLogin() {
    var username= document.getElementById('username').value;
    var password = document.getElementById("password").value;
    
    var validUsername =username;
    var validPassword = password;

    if(username===validUsername && password===validPassword){
        window.location.href='login.html'
    }
    else{
        document.getElementById('errorText').textContent='Invalid username or password'
    }
}