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
const btnBack = document.querySelector(".back-btn")
const forgotForm = document.querySelector(".forgot")
const loginForm = document.querySelector(".wrapper");

function hideLogin(){
    loginForm.classList.add('close-wrapper');
}
function showLogin(){
    loginForm.classList.remove('close-wrapper');
}

function showForgot() {
    forgotForm.classList.add('open-forgot')
}

function hideForgot() {
    forgotForm.classList.remove('open-forgot')
}

btnForgot.addEventListener("click", function(){
    showForgot();
    hideLogin();
})
btnBack.addEventListener("click", function(){
    hideForgot();
    showLogin();
})



