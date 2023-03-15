var CORRECT_USER = "internship_vmodev"
var CORRECT_PASS = "vmodev@2012"

var input_user = document.getElementById("username")
var input_pass = document.getElementById("password")
var formLogin = document.getElementById("login")

let isLogin = localStorage.getItem("token") ? true : false ;

function ktraDN() {
    if(isLogin) {
        window.location.href = "main.html";
    }
}   

if(formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit() {
    var username = input_user.value;
    var password = input_pass.value;

    if(username == CORRECT_USER && password == CORRECT_PASS) {
        localStorage.setItem("token", username)
        isLogin = true;
        ktraDN();
    } else {
        document.getElementById("error").innerHTML = "Please check your login information again!";
    }
}


const btnForgot = document.querySelector(".forgot-btn")
const back = document.querySelector(".back-btn")
const forgot = document.querySelector(".forgot")

function showForgot() {
    forgot.classList.add('open-forgot')
}

function showWrapper() {
    forgot.classList.remove('open-forgot')
}

btnForgot.addEventListener("click", showForgot)
back.addEventListener("click", showWrapper)



