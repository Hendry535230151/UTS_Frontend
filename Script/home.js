const buttons = document.querySelectorAll('.navbar__position button');
const exploreBtn = document.getElementById('exploreButton');
const categoryBx = document.getElementById('categoryBox');
const cartBtn = document.getElementById('cartButton');
buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        if(this === exploreBtn && exploreBtn.classList.contains('active')) {
            categoryBx.classList.remove('hide');
        }
        else{
            categoryBx.classList.add('hide');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    cartBtn.onclick = function () {
        window.location.href = 'cart.html';
    }
});

const products__popular = [
    { id: 1, name: "Product 1", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
];

const products__foru = [
    { id: 1, name: "Product 1", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 20.000", image: "https://via.placeholder.com/150" },
];

const popular = document.getElementById('popularItem');
const foru = document.getElementById('foruItem');

products__popular.forEach(product => {
    const item = document.createElement('div');
    item.className = 'popular__item__container';
    item.innerHTML = `
        <a href="" class="" id="">
            <img src="${product.image}" alt="${product.name}" class="popular__item__img">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </a>
    `;
    popular.appendChild(item);
});

products__foru.forEach(product => {
    const item = document.createElement('div');
    item.className = 'foru__item__container';
    item.innerHTML = `
        <a href="" class="" id="">
            <img src="${product.image}" alt="${product.name}" class="popular__item__img">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </a>
    `;
    foru.appendChild(item);
});