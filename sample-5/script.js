const card = document.querySelector('.card');
const cardToggle = document.querySelector('.toggle');

cardToggle.onclick = (event) => {
    card.classList.toggle('active');
}