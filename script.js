let navbar  = document.querySelector('.navbar');

let menu = document.querySelector('.navbar-nav');

window.onscroll = function(){
    if(window.scrollY >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}