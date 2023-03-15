function add() {
    var item_name = document.getElementById("name").value
    var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []

    listName.push({
        name : item_name
    })
    localStorage.setItem("list-name", JSON.stringify(listName))
    render()
}


function render() {
    var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []

    let job = `<tr>
                    <th>Id</th> 
                    <th>Job Name</th>  
                    <th></th>       
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


function del(index) {    
    var listName = localStorage.getItem("list-name") ? JSON.parse(localStorage.getItem("list-name")) : []
    if(confirm("Confirm deletion of information!")) {
        listName.splice(index, 1)
    }
    localStorage.setItem("list-name", JSON.stringify(listName))
    render();
}
