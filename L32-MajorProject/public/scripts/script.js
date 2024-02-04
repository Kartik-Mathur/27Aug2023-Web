let productList = document.querySelector('.productList');
let cart = document.querySelector('.nav-cart');
let cartNumber =document.querySelector('.cart-number');
productList.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('addToCartBtn')) {
        let id = ev.target.getAttribute('id');
        console.log(id);
        axios.get(`/addtocart?id=${id}`).then((res) => {
            console.log(res);
            // cart.innerText = cart.innerText + res.data.qty;
            cartNumber.innerText = res.data.qty;
        })
    }
    else if (ev.target.classList.contains('wishListBtn')) {
        let id = ev.target.getAttribute('id');
        console.log(id);
    }
})

function updateCartNumber(){
    axios.get('/cartnumber').then(({data})=>{
        let no = data.qty;
        cartNumber.innerText =no;
    })
}

updateCartNumber();