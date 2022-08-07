const query = window.location.search;
const url = new URLSearchParams(query);

const showImg = document.querySelector('#show-img');
const dTitle = document.querySelector('.d-tit');
const price = document.querySelector('.pri');
const curPrice = document.querySelector('.cur-pri');

showImg.src = url.get('image');
dTitle.textContent = url.get('title');
price.textContent = url.get('price');
curPrice.textContent= url.get('current');