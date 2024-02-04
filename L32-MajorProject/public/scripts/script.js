let productList = document.querySelector('.productList');

productList.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('addToCartBtn')) {
        let id = ev.target.getAttribute('id');
        console.log(id);
        axios.get(`/addtocart?id=${id}`).then((msg) => {

        })
    }
    else if (ev.target.classList.contains('wishListBtn')) {
        let id = ev.target.getAttribute('id');
        console.log(id);
    }
})