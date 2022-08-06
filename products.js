
//sticky
const header = document.querySelector('.nav-bar');
window.onscroll = () => {
if(window.scrollY > 100) {
    header.classList.add('active');
}else{
    header.classList.remove('active');
}
}

// navigation bar start
const navBar = document.querySelector('body');
const navLinks = document.querySelector('.nav-links');
const menu = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('togNav');
    overlay.classList.toggle('togOver');
})

cross.addEventListener('click', () => {
    navLinks.classList.remove('togNav');
    overlay.classList.remove('togOver');
})

overlay.addEventListener('click', () => {
    navLinks.classList.remove('togNav');
    overlay.classList.remove('togOver');
})
// navigation bar end

//Pagination
const moreGlassProducts = document.querySelector('.more-glasses-products');
const mroeWatchesProducts = document.querySelector('.more-watches-products');

    function paginations(moreProducts){
        const one= moreProducts.querySelector('.one');
        const two= moreProducts.querySelector('.two');

    one.addEventListener('click', showProducts);
    two.addEventListener('click', showProducts);

    function showProducts(){
        const allBtn = moreProducts.querySelectorAll('.button');
        for(let x = 0; x < allBtn.length; x++){
            allBtn[x].classList.remove('active');
        }
        this.classList.add('active');
        const getId = this.attributes['data-btn'].value;
        const getProducts = moreProducts.querySelector('#'+getId);

        const allProducts = moreProducts.querySelectorAll('.product-row');
        for(let i =0; i<allProducts.length; i++) {
            allProducts[i].classList.remove('active');
        }
        getProducts.classList.add('active');
    }
    }

    paginations(moreGlassProducts);
    paginations(mroeWatchesProducts);

function arrowButton(moreBtn){
    const leftBtn = moreBtn.querySelector('.left-btn');
    const rightBtn = moreBtn.querySelector('.right-btn');

    var paginationCount = 1;

    let next = () => {
        const allBtn = moreBtn.querySelectorAll('.button');
        for(let x = 0; x < allBtn.length; x++){
            allBtn[x].classList.remove('active');
        }
        moreBtn.querySelector(`#show${paginationCount}`).classList.remove('active');
        paginationCount++;
        if(paginationCount > 2){
            paginationCount = 1;
        }
        moreBtn.querySelector(`#show${paginationCount}`).classList.add('active');
    }

    let prev = () => {
        const allBtn = moreBtn.querySelectorAll('.button');
        for(let x = 0; x < allBtn.length; x++){
            allBtn[x].classList.remove('active');
        }
        moreBtn.querySelector(`#show${paginationCount}`).classList.remove('active');
        paginationCount--;
        if(paginationCount < 1){
            paginationCount = 2;
        }
        moreBtn.querySelector(`#show${paginationCount}`).classList.add('active');
    }

    rightBtn.addEventListener('click', next);
    leftBtn.addEventListener('click', prev);

}

arrowButton(mroeWatchesProducts);
arrowButton(moreGlassProducts);
