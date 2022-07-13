let loginButton = document.getElementById("buttonLogin");



function Login(email, password) {
    
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    
    if (email == 'matheus_ct10@hotmail.com' && password == '123') {
        alert("Login com sucesso");

    } else {
        alert("Faha de Login");
    }


}
loginButton.addEventListener("click", Login);