//send product detail start
    const getProduct = document.querySelector('.det-pro');
    const viewBtn = getProduct.querySelectorAll('.view');

    for(let x =0; x< viewBtn.length; x++){
        viewBtn[x].addEventListener('click', send);
    }

    function send(){
        const productDetails = this.closest('.p-row');

        let image = productDetails.querySelector('img').src;
        let title = productDetails.querySelector('.tit').textContent;
        let normalPrice = productDetails.querySelectorAll('span')[0].textContent;
        let disPrice = productDetails.querySelectorAll('span')[1].textContent;

        const sendUrl = `./product-detail.html?image=${image}&title=${title}&price=${normalPrice}&current=${disPrice}`

        this.setAttribute('href', sendUrl);

        
}
 //send product detail end
