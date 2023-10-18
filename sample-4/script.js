let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = (event) => {
    menu.classList.toggle('active');
}