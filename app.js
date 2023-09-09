let sidebar = document.querySelector(".sidebar");
let links = document.querySelector(".links");
let btn = document.querySelector("button");
btn.value = true;
console.log(btn.value);
if(btn.value == true) {
    btn.addEventListener("click", ()=> {
        sidebar.classList.add("anim");
        btn.value = false;
        console.log(btn.value);
    })
}
if(btn.value == false) {
    btn.addEventListener("click", ()=> {
        sidebar.classList.remove("anim");
        btn.value = true;
        console.log(btn.value);
    });
}
