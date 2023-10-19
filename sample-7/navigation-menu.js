const navigationItemList = document.querySelectorAll('.navigation li');

function activeLink(){
    navigationItemList.forEach((item) => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    });
}

navigationItemList.forEach((item) => {
    item.addEventListener('mouseover', activeLink);
});