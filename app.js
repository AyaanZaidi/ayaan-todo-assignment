var input = document.getElementById("myInput")
var ul = document.getElementById("myUL")

function newElement(){
    if(input.value == ""){
        alert("please enter value")
    }else{
        var li = document.createElement("li")
        var liTxt = document.createTextNode(input.value)
        li.appendChild(liTxt)

        var edit = document.createElement("i")
        edit.setAttribute("class" , "fa-solid fa-marker pen")
        edit.setAttribute("onclick" , "editBtn(this)")
        li.appendChild(edit)

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.setAttribute("onclick" , "delBtn(this)")
        span.appendChild(txt);
        li.appendChild(span)
        ul.appendChild(li)
        input.value = ""
    }
}

function editBtn(e){
    var newInput = prompt("enter edit value" , e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = newInput
}

function delBtn(d){
    d.parentNode.remove();
}

function del(){
    ul.innerHTML = ""
}