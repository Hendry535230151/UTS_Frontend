const buttons = document.querySelectorAll('.navbar__position button');
const exploreBtn = document.getElementById('exploreButton');
const categoryBx = document.getElementById('categoryBox');
const showStory = document.getElementById('showStoryButton');
const main = document.getElementById('mainContext');
const desc = document.getElementById('description');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cartBtn = document.getElementById('cartButton');
const profBtn = document.getElementById('profileButton');

function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    preloadImages(imageList);
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
    { id: 1, name: "Nike Socks", description: "Comfortable and durable socks for everyday wear.", price: "Rp. 200.000", image: "../Image/socks.webp", link:"product_page.html?id=8"},
    { id: 2, name: "Alexander Watch", description: "Elegant wrist watch for a sophisticated look.", price: "Rp. 2.000.000", image: "../Image/watch1.webp", link:"product_page.html?id=6"},
    { id: 3, name: "Ring", description: "Elegant ring made of premium silver, perfect for formal or casual wear.", price: "Rp. 500.000", image: "../Image/ring1.webp", link:"product_page.html?id=7" },
    { id: 4, name: "Kids Piyama", description: "Comfortable and cozy pajamas for a good night's sleep.", price: "Rp. 250.000", image: "../Image/piyama.webp", link:"product_page.html?id=12" },
    { id: 5, name: "Gold Necklance", description: "A luxurious necklace made of high-quality materials for a refined look.", price: "Rp. 3.000.000", image: "../Image/necklace.webp", link:"product_page.html?id=9"},
    { id: 6, name: "Sketchers Shoes", description: "Trendy sneakers for an active lifestyle, featuring cutting-edge design and comfort.", price: "Rp. 2.550.000", image: "../Image/sneakers.webp", link:"product_page.html?id=4" },
    { id: 7, name: "Piyama", description: "Comfortable and cozy pajamas for a good night's sleep.", price: "Rp. 250.000", image: "../Image/piyama1.webp", link:"product_page.html?id=12"},
    { id: 8, name: "Skirt", description: "A fashionable skirt, perfect for formal and casual occasions.", price: "Rp. 300.000", image: "../Image/skirt2.webp", link:"product_page.html?id=11"},
];

const products__foru = [
    { id: 1, name: "Skirt", description: "A fashionable skirt, perfect for formal and casual occasions.", price: "Rp. 300.000", image: "../Image/skirt2.webp", link:"product_page.html?id=11"},
    { id: 2, name: "Piyama", description: "Comfortable and cozy pajamas for a good night's sleep.", price: "Rp. 250.000", image: "../Image/piyama1.webp", link:"product_page.html?id=12"},
    { id: 3, name: "Sketchers Shoes", description: "Trendy sneakers for an active lifestyle, featuring cutting-edge design and comfort.", price: "Rp. 2.550.000", image: "../Image/sneakers.webp", link:"product_page.html?id=4" },
    { id: 4, name: "Gold Necklance", description: "A luxurious necklace made of high-quality materials for a refined look.", price: "Rp. 3.000.000", image: "../Image/necklace.webp", link:"product_page.html?id=9"},
    { id: 5, name: "Kids Piyama", description: "Comfortable and cozy pajamas for a good night's sleep.", price: "Rp. 250.000", image: "../Image/piyama.webp", link:"product_page.html?id=12" },
    { id: 6, name: "Ring", description: "Elegant ring made of premium silver, perfect for formal or casual wear.", price: "Rp. 500.000", image: "../Image/ring1.webp", link:"product_page.html?id=7" },
    { id: 7, name: "Alexander Watch", description: "Elegant wrist watch for a sophisticated look.", price: "Rp. 2.000.000", image: "../Image/watch1.webp", link:"product_page.html?id=6"},
    { id: 8, name: "Nike Socks", description: "Comfortable and durable socks for everyday wear.", price: "Rp. 200.000", image: "../Image/socks.webp", link:"product_page.html?id=8"},
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
        <a href="${product.link}">
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
        <a href="${product.link}" class="" id="">
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
    "portrait-young-beautiful-teen-girls.jpg": {
        content: "Anak-anak adalah sosok yang penuh energi, selalu bergerak, dan siap untuk bermain sepanjang hari. Oleh karena itu, penting bagi mereka untuk mengenakan pakaian yang tidak hanya trendi, tetapi juga nyaman dan fungsional. Kami menawarkan beragam koleksi fashion anak-anak yang dirancang dengan sentuhan ceria, warna-warna segar, dan bahan berkualitas tinggi yang lembut di kulit.Fashion anak-anak di ZALORA mencakup pilihan pakaian kasual untuk aktivitas sehari-hari, hingga pakaian khusus untuk acara-acara spesial. Dengan berbagai motif lucu dan desain yang menggemaskan, koleksi ini mendukung si kecil tampil percaya diri tanpa mengorbankan kenyamanan. Dari piyama yang nyaman untuk tidur malam yang nyenyak, hingga dress dan jaket yang stylish untuk penampilan harian, setiap item kami dirancang untuk memenuhi kebutuhan anak-anak yang aktif dan ceria."
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