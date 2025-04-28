const navbarToogle= document.querySelector('.navbar-toogle');
const navbarMenu= document.querySelector('.navbar-menu');
navbarToogle.addEventListener('click',()=>{
    navbarToogle.classList.toogle('active');
    navbarMenu.classList.toogle('active');
})