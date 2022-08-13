const addingField = document.getElementById('add');
const addBtn = document.getElementById('add-items')
const alert = document.getElementById('alert-box')
const alertText = document.getElementsByClassName('alert-box')
const header = document.getElementsByTagName('header')
const ulList = document.querySelector('ul')

function addItems(e){
    e.preventDefault()
    const fieldValue = addingField.value;
    if(fieldValue===""){
       alert.classList.add('alert-danger')
       alert.classList.remove('d-none')
       alert.innerText="Please Type anything to Add Items"
    }

    else{
        alert.classList.add('alert-success')
        alert.classList.remove('d-none')
        alert.innerText="You have Added an Item"

    }

    itemAdding()
}

function itemAdding(){
    const fieldValue = addingField.value;
    const creatingElem = document.createElement('li');

    if(fieldValue){
    creatingElem.innerText=fieldValue;
    ulList.appendChild(creatingElem)
    creatingElem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const icons = document.createElement('i');
    const setAttr = icons.setAttribute("class", "far fa-trash-alt delete");
    creatingElem.append(icons)
    }

}


addBtn.addEventListener('click', addItems);

ulList.lastElementChild.style.color="green";

