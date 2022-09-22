const icon = document.querySelector("#search")
const searchWrap = document.querySelector(".search-wrap")
const close = document.querySelector("#close")
const cart = document.querySelector("#cart")
const dropCart = document.querySelector(".dropdown-cart")
const exitBtn = document.querySelector ("#exit")
const header = document.querySelector("header")
const blog = document.querySelector (".blog")
const subMenu = document.querySelector (".sub-menu")



window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY>0)
})

blog.addEventListener("mouseenter",()=>{
    subMenu.classList.add("visibil")
})
blog.addEventListener("mouseleave",()=>{
    subMenu.classList.remove("visibil")
})

icon.addEventListener("click",()=>{
    searchWrap.classList.add("add")
    
});
close.addEventListener("click",()=>{
    searchWrap.classList.remove("add")
})


cart.addEventListener("click",()=>{
    dropCart.classList.toggle("add")
});
exitBtn.addEventListener("click",()=>{
    dropCart.classList.remove("add")
})

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById ("progress");
    let progressValue = document.getElementById ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round ((pos * 100) / calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid"

    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;

    });
   
}




window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



const bars = document.querySelector(".fa-bars")
const closeBtn = document.querySelector(".close-btn")
const canvasStart = document.querySelector(".offcanvas-start")


bars.addEventListener("click",()=>{
    canvasStart.classList.toggle("canvas")
})

closeBtn.addEventListener("click",()=>{
    canvasStart.classList.remove("canvas")
})

