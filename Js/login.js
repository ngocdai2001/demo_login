const dataLogin = [
        {
            username: "internship_vmodev",
            password: "vmodev@2012"
        }
    ]
let isLogin = localStorage.getItem("token") ? true : false ;

function ktraDN() {
    if(isLogin) {
        window.location.href = "index.html";
    }
}

function btnLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = dataLogin.some(value => value.username === username && value.password === password);
    if (checkLogin) {
        localStorage.setItem("token", username)
        isLogin = true;
        ktraDN()
    } else {
        document.getElementById("error").innerHTML = "Yêu cầu nhập lại thông tin!";
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


