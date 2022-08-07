    const getOrder = document.querySelector('.det-pro');
    const cartBtn = getOrder.querySelectorAll('.cart');
    const qty = document.querySelector('#qty');

    let quan  = 0;
    for(let x =0; x< cartBtn.length; x++){
        cartBtn[x].addEventListener('click', addCount);
    }

    function addCount(){
       quan += 1;
        qty.textContent = quan;
        qty.classList.add('active');
    }
