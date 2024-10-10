const buttons = document.querySelectorAll('.navbar__position button');
const exploreBtn = document.getElementById('exploreButton');
const categoryBx = document.getElementById('categoryBox');
const showStory = document.getElementById('showStoryButton');
const main = document.getElementById('mainContext');
const desc = document.getElementById('description');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const catsButton = document.querySelectorAll('.category__main__cat ul li button');
const cats = document.querySelectorAll('.category__sub__cat > div');

const cartBtn = document.getElementById('cartButton');
const expBtn = document.getElementById('exploreButton');
const profBtn = document.getElementById('profileButton');

const imageList = [
    "skincare-makeup-concept-beautiful-asian-female-woman-with-healthy-facial-skin-close-up-portrait-studio-shot.jpg",
    "image2.jpg",
    "image3.jpg",
];

function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    preloadImages(imageList);
});


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

document.addEventListener('DOMContentLoaded', function() {
    expBtn.onclick = function () {
        window.location.href = 'zalora_page.html';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    profBtn.onclick = function () {
        
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


let isGridVisible = false;

showStory.addEventListener('click', function() {
    if (isGridVisible) {
        hideGrid();
    } else {
        showGrid();
    }
    isGridVisible = !isGridVisible;
});

function hideGrid() {
    main.classList.remove('show__grid');
    main.classList.add('hide__grid');
    desc.classList.add('hide');
    prev.classList.add('hide');
    next.classList.add('hide');
}

function showGrid() {
    main.classList.remove('hide__grid');
    main.classList.add('show__grid');
    desc.classList.remove('hide');
    prev.classList.remove('hide');
    next.classList.remove('hide');
}

const products__popular = [
    { id: 1, name: "Nike Socks", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/socks.webp" },
    { id: 2, name: "Alexander Watch", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/watch1.webp" },
    { id: 3, name: "Ring", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/ring1.webp" },
    { id: 4, name: "Kids Piyama", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/piyama.webp" },
    { id: 5, name: "Gold Necklance", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/necklace.webp" },
    { id: 6, name: "Sketchers Shoes", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/sneakers.webp" },
    { id: 7, name: "Organic Cotton", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/piyama1.webp" },
    { id: 8, name: "Skirt", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/skirt2.webp" },
];

const products__foru = [
    { id: 1, name: "Nike Socks", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/socks.webp" },
    { id: 2, name: "Alexander Watch", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/watch1.webp" },
    { id: 3, name: "Ring", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/ring1.webp" },
    { id: 4, name: "Kids Piyama", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/piyama.webp" },
    { id: 5, name: "Gold Necklance", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/necklace.webp" },
    { id: 6, name: "Sketchers Shoes", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/sneakers.webp" },
    { id: 7, name: "Organic Cotton", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/piyama1.webp" },
    { id: 8, name: "Skirt", description: "This is an item loremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremloremloremloremlooremlorem", price: "Rp. 300.000", image: "../Image/skirt2.webp" },
];
const customerRating = [
    { id: 1, name: "human 1232", description: "the best website ever", rating: "5.0", image:"../image/user1.jpg"},
    { id: 2, name: "human 3569", description: "I never know there is a lot of life hack", rating: "5.0", image:"../image/user2.jpg"},
    { id: 3, name: "human 4445", description: "OMG!!! this is the best", rating: "5.0", image:"../image/user3.jpg"},
    { id: 4, name: "human 5785", description: "It recommend us the best combination of shirt and pants", rating: "5.0", image:"../image/user4.jpg"},
];

const popular = document.getElementById('popularItem');
const foru = document.getElementById('foruItem');
const customer = document.getElementById('customerRating');

products__popular.forEach(product => {
    const item = document.createElement('div');
    item.className = 'popular__item__container';
    item.innerHTML = `
        <a href="" class="" id="">
            <div class="container__item">
                <img src="${product.image}" alt="${product.name}" class="popular__item__img">
            </div>
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
            <div class="container__item">
                <img src="${product.image}" alt="${product.name}" class="popular__item__img">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        </a>
    `;
    foru.appendChild(item);
});

customerRating.forEach(rating => {
    const item = document.createElement('div');
    item.className = 'customer__rating__container';
    item.innerHTML = `
        <div class="customer__rating__image">
            <img src="${rating.image}" alt="${rating.name}">
        </div>
        <div class="rating__section">
            <div class="top__section">
                <h3>${rating.name}</h3>
                <p>${rating.rating}</p>
            </div>
            <p>${rating.description}</p>
        </div>
    `;
    customer.appendChild(item);
});

const descriptions = {
    "skincare-makeup-concept-beautiful-asian-female-woman-with-healthy-facial-skin-close-up-portrait-studio-shot.jpg": {
        content: "Kami menjual produk kecantikan, seperti skincare dan makeup, karena pentingnya perawatan diri semakin disadari oleh banyak orang, terutama dalam menjaga kesehatan kulit dan tampil percaya diri. Skincare membantu merawat kulit agar tetap sehat, lembut, dan terlindungi dari faktor eksternal, sementara makeup memberikan sentuhan akhir untuk menonjolkan kecantikan alami. Dengan semakin banyaknya permintaan terhadap produk kecantikan, terutama di kalangan perempuan yang peduli terhadap kesehatan kulit dan penampilan mereka, kategori ini menjadi pilihan penting untuk kami tawarkan. Produk-produk ini mendukung pelanggan dalam mencapai kulit yang sehat dan tampilan yang memukau, menciptakan pengalaman yang memuaskan."
    },
    "young-stylish-macho-boy-black-jacket-posed-outdoor-street-amazing-model-man.jpg": {
        content: "Setiap Pria memiliki cara berbeda dalam hal pemilihan pakaian serta produk-produk yang diperlukan. Namun tidak semua pria dapat memilih produk-produk yang cocok untuk diri sendiri. disini lah kita menyediakan berbagai opsi untuk para pria untuk mengekspresikan gaya mereka sendiri dengan cara yang lebih modern dan lebih nyaman. Di zalora menyediakan fashion yang sesuai untuk pria dimoment apa pun."
    },
    "jeans2.webp": {
        content: "Test2"
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