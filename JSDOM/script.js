function showName() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML ="Hai " + name;
}
let count = 0;
function increment(){
    
count++;

document.getElementById("count").innerHTML = count;

}

function decrement(){
    count--;
    document.getElementById("count").innerHTML = count;
}

function toggleTheme(){
    document.body.classList.toggle("dark");

}

function addTask(){
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerHTML = task;
    document.getElementById("list").appendChild(li);

}
