function onCheckBoxChange(id){
    const checkbox = document.getElementById(id)

    if (checkbox.checked) {
            //alert('checked '+id);
            listContent[(listContent.findIndex(e => e[0] === id))][2] = true

        } else {
            listContent[(listContent.findIndex(e => e[0] === id))][2] = false
        }
    console.log(listContent)
}

function addCheckbox(){
    const childrenCount = document.getElementById("list-container").childElementCount
    const input = document.getElementById('input-text')
    const id = childrenCount
    const newItem = "<div class='list-item'><input class='form-check-input' type='checkbox' value='' id="+id+" onchange='onCheckBoxChange("+id+")' unchecked> <label class='form-check-label' for='"+id+"'> "+input.value+"</label> <button type=button' class='btn-close btn-close-white close' aria-label='Close' onclick='removeCheckbox("+id+")' style='float:right;'></button></div>"
    
    
    listContent.push([id,newItem,false])
    input.value = ""

    updateCheckbox()
}

function removeCheckbox(id){
    listContent[(listContent.findIndex(e => e[0] === id))][1] = "<div></div>"

    updateCheckbox()
}

function updateCheckbox(){
    let content = ""
    
    for(let i=0; i<listContent.length;i++){
        console.log(listContent[i][2])
        if(listContent[i][2]==false){
            content+=listContent[i][1]
        }
        else{
            content+=listContent[i][1].replace("unchecked","checked")
        }
    }
    $("#list-container").html(content)

    localStorage.setItem("todoListContent",JSON.stringify(listContent))
}

function clearStorage(){
    localStorage.clear()
    listContent = []
    updateCheckbox()
}

let listContent

if (localStorage.getItem("todoListContent") === null) {
    listContent = []
    console.log("empty")
}
else{
    listContent = JSON.parse(localStorage.getItem("todoListContent"))
    console.log("full")
    
}

updateCheckbox()


