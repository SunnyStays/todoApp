function onCheckBoxChange(id){
    const checkbox = document.getElementById(id)

    if (checkbox.checked) {
            alert('checked '+id);
            
        } else {
            alert('not checked '+id);
        }
}

function addCheckbox(){
    const childrenCount = document.getElementById("list-container").childElementCount
    const input = document.getElementById('input-text')
    const id = childrenCount+1
    const newItem = "<div><input class='form-check-input' type='checkbox' value='' id="+id+" onchange='onCheckBoxChange("+id+")'> <label class='form-check-label' for='"+id+"'> "+input.value+" </label></div>"
    
    
    listContent.push([id,newItem,false])
    input.value = ""

    updateCheckbox()
}

function updateCheckbox(input){
    let content = ""
    
    for(let i=0; i<listContent.length;i++){
        content+=listContent[i][1]
    }
    $("#list-container").html(content)
}

let listContent = []


