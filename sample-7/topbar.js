const navigationToggler = document.querySelector('.toggle');
const navigationMenu = document.querySelector('.navigation');
const mainContainer = document.querySelector('.main');

navigationToggler.onclick = function(){
    navigationMenu.classList.toggle('active');
    mainContainer.classList.toggle('shrink');
}