
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

// slider start
const right = document.querySelector('.right-arrow');
const left = document.querySelector('.left-arrow');
const slide = document.querySelector('#slide');
const slides = slide.querySelectorAll('.slides');

let value = 0;
let count = 0;


let next = () => {
    value -= 343;
    slide.style.marginLeft = value +'px';
    count++;
    if(count >= 12){
        slide.style.marginLeft = 0;
        value=0;
        count =0;
    }
}

right.addEventListener('click', next);

setInterval(() => {
    next();
}, 50000);

left.addEventListener('click', () => {
    value += 343;
    slide.style.marginLeft = value + 'px';
    count--;
    if(count < 0){
        slide.style.marginLeft = -3773+ 'px';
        value = -3773; 
        count = 12;
    }
})

// const Largepc = window.matchMedia("(min-width: 980px)");
// const pc = window.matchMedia("(max-width: 980px");
// const tablet = window.matchMedia("(max-width: 780px)");
// const mobile = window.matchMedia("(max-width: 550px)");

//     right.addEventListener('click', () => {
//             if(mobile.matches){
//                 rightMove(1);
//             }
//             else if(tablet.matches){
//                 rightMove(2);
//             }
//             else if(pc.matches){
//                 rightMove(3);
//             }
//             else{
//                 rightMove(4);
//             }
    
//     })
    
//     left.addEventListener('click', () => {
//         if(mobile.matches){
//             leftMove(1);
//         }
//         else if(tablet.matches){
//             leftMove(2);
//         }
//         else if(pc.matches){
//             leftMove(3);
//         }
//         else{
//             leftMove(4);
//         }
//     })


// let rightMove = (increase = 1) => {
//     value -= 100;
//     count += increase;
//     left.style.display = 'inline';
//     if(count == slides.length){
//       right.style.display = 'none';
//       return;
//     }
//     slide.style.marginLeft = value+'%';
// }

// let leftMove = (increase = 1) => {
//     value += 100;
//     count -= increase;

//     right.style.display = 'inline';
//     if(count < 0){
//         left.style.display = 'none';
//         return;
//     }
//     slide.style.marginLeft = value+'%';
// }
// slider end

//special offer

let newDate = new Date('2022','11','6').getTime();

let offerDate = () => {
    let currentDate = new Date().getTime();
    let gap = newDate - currentDate;

    let sec = 1000;
    let min = sec * 60;
    let hour = min * 60;
    let day = hour * 24;

    let offDay = Math.floor(gap / day);
    let offHour = Math.floor((gap % day) / hour);
    let offMin = Math.floor((gap % hour) / min);
    let offSec = Math.floor((gap % min) / sec)
    
    let d = document.querySelector('.d');
    let h = document.querySelector('.h');
    let m = document.querySelector('.m');
    let s = document.querySelector('.s');

    d.textContent = offDay;
    h.textContent = offHour;
    m.textContent = offMin;
    s.textContent = offSec;
}

setInterval(() => {
    offerDate()
}, 1000);

//special offer


