const navigationListItemList = document.querySelectorAll('.list-item');

for (let index = 0; index < navigationListItemList.length; index++) {
    navigationListItemList[index].onclick = (event) => {
        let j = 0;
        while(j < navigationListItemList.length){
            navigationListItemList[j++].className = 'list-item';
        }

        navigationListItemList[index].className = 'list-item active';
    }
    
}

const navigationMenu = document.querySelector('.navigation');

const navigationMenuToggler = document.querySelector('.toggle');
navigationMenuToggler.onclick = (event) => {
    navigationMenuToggler.classList.toggle('active');
    navigationMenu.classList.toggle('active');
}


