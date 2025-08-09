console.log("hry");
let a = document.querySelector("button");
let r = document.querySelector("img")
let inp = document.querySelector("input");
let task = document.querySelector(".task");

a.addEventListener("click", function () {
    let tasks = inp.value;
    if (inp.value.trim() === "") {
        alert("kuch to likh mc")
        return
    } else {
        let li = document.createElement("li");
        li.textContent = tasks;
        li.style.display = "flex";           // NEW: keep items in a row
        li.style.alignItems = "center";      // NEW: vertical centering
        li.style.justifyContent = "space-between"; // optional spacing
        let cross = document.createElement("div");
        cross.textContent = "❌"
        cross.style.marginLeft = "10px"
        task.appendChild(li)
        task.appendChild(cross)
        inp.value = ""; 
        cross.addEventListener("click",function(){
            li.remove()
            cross.remove()
        })
    }

});