let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', ()=>{
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

let products = null;
//get data from file json
fetch("https://binalot.github.io/products/product.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    products = data;
    addDataToHTML();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


function addDataToHTML(){
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    if(products != null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}">
            <h2>${product.name}</h2>
            <div class="price">P${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
            
        });
    }
}