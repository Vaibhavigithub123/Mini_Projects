const input = document.getElementById("input-box")
const button = document.getElementById("addtodoBtn")
const task = document.getElementById("todoList")
const delbtn = document.querySelector(".delete-button")

button.addEventListener("click", () =>{
    if(input.value == ''){
        alert("Please enter something")
        
    }
    else{
        const listItem = document.createElement('li')
        listItem.innerHTML = input.value;
        task.appendChild(listItem);

        const xSpan = document.createElement("span")
        xSpan.innerHTML = "\u00d7"
        listItem.appendChild(xSpan)
    }
    input.value = "";
    saveTask();
})

task.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveTask()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveTask()
    }
},false)

delbtn.addEventListener("click", ()=>{
    task.innerHTML = '';
    saveTask()
})


//stored list in local storage
function saveTask(){
    localStorage.setItem("data",task.innerHTML)
}

function showTask(){
    task.innerHTML = localStorage.getItem("data")
}
showTask()
