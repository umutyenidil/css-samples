const navigationItemList = document.querySelectorAll('.navigation-item');

function activeLink(){
    navigationItemList.forEach((navigationItem) => {
        navigationItem.classList.remove('active');
        this.classList.add('active');
    });
}

navigationItemList.forEach((navigationItem) => {
    navigationItem.addEventListener('click', activeLink);
});