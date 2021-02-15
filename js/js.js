const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// event listener 
tabItems.forEach(item => item.addEventListener('click',selectItem));
tabContentItem.forEach(item => item.addEventListener('click',selectItem));

// function 
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeitem(){
    tabContentItem.forEach(item => item.classList.remove('show'))
}

function selectItem(e){
    removeBorder();
    removeitem();

    this.classList.add('tab-border');
    let tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');
}