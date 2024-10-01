const buttons = document.querySelectorAll('.navbar__position button');
const exploreBtn = document.getElementById('exploreButton');
const categoryBx = document.getElementById('categoryBox');
const cartBtn = document.getElementById('cartButton');
const showStory = document.getElementById('showStoryButton');
const main = document.getElementById('mainContext');
const desc = document.getElementById('description');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const catsButton = document.querySelectorAll('.category__main__cat ul li button');
const cats = document.querySelectorAll('.category__sub__cat > div');

buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        if(this === exploreBtn && exploreBtn.classList.contains('active')) {
            categoryBx.classList.toggle('hide');
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

catsButton.forEach((catBtn, index) => {
    catBtn.addEventListener('mouseover', () => {
        cats.forEach(cat => {
            cat.classList.add('hide');
        });
        cats[index].classList.remove('hide');
    });
});


showStory.addEventListener('click', function() {
    if (main.classList.contains('show__grid')) {
        main.classList.remove('show__grid');
        main.classList.add('hide__grid');
        desc.classList.add('hide');
        prev.classList.add('hide');
        next.classList.add('hide');
    } else {
        main.classList.remove('hide__grid');
        main.classList.add('show__grid');
        desc.classList.remove('hide');
        prev.classList.remove('hide');
        next.classList.remove('hide');
    }
})

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

const descriptions = {
    "jeans.webp": {
        content: "Setiap Pria memiliki cara berbeda dalam hal pemilihan pakaian serta produk-produk yang diperlukan. Namun tidak semua pria dapat memilih produk-produk yang cocok untuk diri sendiri. disini lah kita menyediakan berbagai opsi untuk para pria untuk mengekspresikan gaya mereka sendiri dengan cara yang lebih modern dan lebih nyaman. Di zalora menyediakan fashion yang sesuai untuk pria dimoment apa pun."
    },
    "jeans1.webp": {
        content: "Test"
    },
    "jeans2.webp": {
        content: "Test"
    }
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  changeDescription(slides[slideIndex-1].getElementsByTagName("img")[0].src);
}

function changeDescription(imageSrc) {
    const imageName = imageSrc.split("/").pop();
    const description = descriptions[imageName];
    if (description) {
        document.getElementById("slideContent").innerText = description.content;
    }
}