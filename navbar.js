
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