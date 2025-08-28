import './style.css'

let nav = document.querySelector("#nav");
document.querySelector("#menu").addEventListener("click",()=>{
    
    if(nav.classList.contains("translate-x-160")){
        nav.classList.remove("translate-x-160");
    }else{
        nav.classList.add("translate-x-160")
    }


});

document.querySelector("#close").addEventListener("click",()=>{
    
    nav.classList.add("translate-x-160") 
})


