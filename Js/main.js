//Check ô để trống
function validateInput() {
    let inputElement = document.querySelectorAll(".job-form")
    for(let i=0; i < inputElement.length; i++) {
        if(inputElement[i].value === "") {
            inputElement[i].parentElement.querySelector(".error-message").innerText = "Not be empty!"
        } else {
            inputElement[i].parentElement.querySelector(".error-message").innerText = ""
        }
    }
}

//Add dữ liệu
function add() {
    validateInput()
    let errorElement = document.querySelectorAll(".error-message")
    let arrErrorElement = []
    for(let i=0; i<errorElement.length; i++) {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement = arrErrorElement.every(value => value === "")
    if(checkErrorElement) {
        var item_name = document.getElementById("name").value
        var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []

        listName.push({
            name : item_name
        })
        localStorage.setItem("list-name", JSON.stringify(listName))
        render()
    }
}

//Hiển thị data ra bảng
function render() {
    var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []

    let job = `<tr>
                    <th>Id</th> 
                    <th>Job Name</th>  
                    <th>Action</th>       
                </tr>`

    listName.map((value, index)=>{
        job+=`<tr>
                <td>${index+1}</td> 
                <td>${value.name}</td>  
                <th><button class="del-btn" onclick="del(${index})"><i class="fa-solid fa-trash"></i></button></th>       
            </tr>`
    })
    document.getElementById("table").innerHTML = job
}

//Delete data
function del(index) {    
    var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []
    if(confirm("Confirm deletion of information!")) {
        listName.splice(index, 1)
    }
    localStorage.setItem("list-name", JSON.stringify(listName))
    render();
}

