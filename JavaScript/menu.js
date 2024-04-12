/*JS Coding for Functional Food Tabs*/


let list = document.querySelectorAll(".list li");
let boxes = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click", (e)=>{

        list.forEach((el1)=>{
            el1.style.color = "whitesmoke";
        })
        e.target.style.color = "#f2c641";

        boxes.forEach((el2)=> {
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
            li.style.display = "flex";
        })
    })
})