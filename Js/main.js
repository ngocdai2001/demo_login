var data = []

function add() {
    var item_name = document.getElementById("name").value

    var item = {
        Name: item_name
    }
    data.push(item);
    render()
}

function render() {
    table = `<tr>
                <th>Name Job</th> 
                <th>Action</th>                        
            </tr>`
    for(let i=0; i< data.length; i++) {
        table += `<tr>
                    <th>${data[i].Name}</th> 
                    <th><button onclick="del(${data[i].Name})" class="job-btn">Delete</button></th>
                </tr>`
    }
    document.getElementById("render").innerHTML = table
}

function del() {    
    for(let i=0; i<data.length; i++) {
        console.log()
        // if(data[i].Name===job) {
        //     data.splice(i,1)

        //     render()
        // }
    }
}
