
let add=document.getElementById("add");
let count=0;
function insert(){
    let input=document.getElementById("input");
    let list=document.getElementById("list1");
    let date=document.getElementById("date");
    let time=document.getElementById("time");
    if(input.value==0){
        alert("add your task");
    }else{
    let template=`<li>${input.value} <span>${date.value}</span> <span>${time.value}</span> </i> <input type="checkbox" class="checkbox" > <i onclick="deleting(this)" class="fa-solid fa-trash" ></i></li>`;
    list.insertAdjacentHTML("beforeend",template);
    input.value="";
    
    input.focus();
    
}
}
function deleting(x){
x.parentElement.remove();
}


// input.addEventListener('keyup',(e)=>{
//     if(e.key==='Enter'){
//         insert();
//     }
// })