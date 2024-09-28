const products = {
    "1": {
        "title": "Casual Shirt",
        "price": "Rp 200.000",
        "description": "A casual shirt perfect for everyday wear, crafted with soft, comfortable fabric.",
        "variation": "White/Blue",
        "stars": "★★★★☆",
        "reviews": 80,
        "images": [
            "/Image/casual_shirt.webp",
            "/Image/casual_shirt1.webp",
            "/Image/casual_shirt2.webp"
        ],
        "colors": [
            "/Image/casual_shirt.webp",
            "/Image/casual_shirt1.webp",
            "/Image/casual_shirt2.webp"
        ]
    },
    "2": {
        "title": "Denim Jeans",
        "price": "Rp 300.000",
        "description": "Stylish denim jeans with a perfect fit for any occasion.",
        "variation": "Blue/White",
        "stars": "★★★★☆",
        "reviews": 90,
        "images": [
            "/Image/jeans.webp",
            "/Image/jeans1.webp",
            "/Image/jeans2.webp"
        ],
        "colors": [
            "/Image/jeans.webp",
            "/Image/jeans1.webp",
            "/Image/jeans2.webp"
        ]
    },
    "3": {
        "title": "Leather Boots",
        "price": "Rp 2.000.000",
        "description": "Premium leather boots designed for style and durability.",
        "variation": "Black",
        "stars": "★★★★★",
        "reviews": 150,
        "images": [
            "/Image/leather_boots.webp",
            "/Image/leather_boots1.webp",
            "/Image/leather_boots2.webp"
        ],
        "colors": [
            "/Image/leather_boots.webp",
            "/Image/leather_boots1.webp",
            "/Image/leather_boots2.webp"
        ]
    },
    "4": {
        "title": "Sneakers",
        "price": "Rp 2.550.000",
        "description": "Trendy sneakers for an active lifestyle, featuring cutting-edge design and comfort.",
        "variation": "Black/White",
        "stars": "★★★★☆",
        "reviews": 110,
        "images": [
            "/Image/sneakers.webp",
            "/Image/sneakers1.webp",
            "/Image/sneakers2.webp"
        ],
        "colors": [
            "/Image/sneakers.webp",
            "/Image/sneakers1.webp",
            "/Image/sneakers2.webp"
        ]
    },
    "5": {
        "title": "Jacket",
        "price": "Rp 2.500.000",
        "description": "High-quality jacket to keep you warm and stylish during cold weather.",
        "variation": "Black/Grey",
        "stars": "★★★★☆",
        "reviews": 95,
        "images": [
            "/Image/jacket.webp",
            "/Image/jacket1.webp",
            "/Image/jacket2.webp"
        ],
        "colors": [
            "/Image/jacket.webp",
            "/Image/jacket1.webp",
            "/Image/jacket2.webp"
        ]
    },
    "6": {
        "title": "Wrist Watch",
        "price": "Rp 2.000.000",
        "description": "Elegant wrist watch for a sophisticated look.",
        "variation": "Silver/Black",
        "stars": "★★★★★",
        "reviews": 130,
        "images": [
            "/Image/watch.webp",
            "/Image/watch1.webp",
            "/Image/watch2.webp"
        ],
        "colors": [
            "/Image/watch.webp",
            "/Image/watch1.webp",
            "/Image/watch2.webp"
        ]
    },
    "7": {
        "title": "Ring",
        "price": "Rp 500.000",
        "description": "Elegant ring made of premium silver, perfect for formal or casual wear.",
        "variation": "Silver",
        "stars": "★★★★☆",
        "reviews": 75,
        "images": [
            "/Image/ring.webp",
            "/Image/ring1.webp",
            "/Image/ring2.webp"
        ],
        "colors": [
            "/Image/ring.webp",
            "/Image/ring1.webp",
            "/Image/ring2.webp"
        ]
    },
    "8": {
        "title": "Socks",
        "price": "Rp 200.000",
        "description": "Comfortable and durable socks for everyday wear.",
        "variation": "White/Grey",
        "stars": "★★★★☆",
        "reviews": 60,
        "images": [
            "/Image/socks.webp",
            "/Image/socks1.webp",
            "/Image/socks2.webp"
        ],
        "colors": [
            "/Image/socks.webp",
            "/Image/socks1.webp",
            "/Image/socks2.webp"
        ]
    },
    "9": {
        "title": "Necklace",
        "price": "Rp 3.000.000",
        "description": "A luxurious necklace made of high-quality materials for a refined look.",
        "variation": "Gold",
        "stars": "★★★★★",
        "reviews": 70,
        "images": [
            "/Image/necklace.webp",
            "/Image/necklace1.webp",
            "/Image/necklace2.webp"
        ],
        "colors": [
            "/Image/necklace.webp",
            "/Image/necklace1.webp",
            "/Image/necklace2.webp"
        ]
    },
    "10": {
        "title": "Bag",
        "price": "Rp 1.500.000",
        "description": "Stylish and durable bag, perfect for both casual and formal use.",
        "variation": "Black/Brown",
        "stars": "★★★★☆",
        "reviews": 85,
        "images": [
            "/Image/bag.webp",
            "/Image/bag1.webp",
            "/Image/bag2.webp"
        ],
        "colors": [
            "/Image/bag.webp",
            "/Image/bag1.webp",
            "/Image/bag2.webp"
        ]
    },
    "11": {
        "title": "Skirt",
        "price": "Rp 300.000",
        "description": "A fashionable skirt, perfect for formal and casual occasions.",
        "variation": "Black/White",
        "stars": "★★★★☆",
        "reviews": 65,
        "images": [
            "/Image/skirt.webp",
            "/Image/skirt1.webp",
            "/Image/skirt2.webp"
        ],
        "colors": [
            "/Image/skirt.webp",
            "/Image/skirt1.webp",
            "/Image/skirt2.webp"
        ]
    },
    "12": {
        "title": "Piyama",
        "price": "Rp 250.000",
        "description": "Comfortable and cozy pajamas for a good night's sleep.",
        "variation": "Blue/Pink",
        "stars": "★★★★☆",
        "reviews": 50,
        "images": [
            "/Image/piyama.webp",
            "/Image/piyama1.webp",
            "/Image/piyama2.webp"
        ],
        "colors": [
            "/Image/piyama.webp",
            "/Image/piyama1.webp",
            "/Image/piyama2.webp"
        ]
    }
};


let currentSlide = 0;
let slides;

function showSlide(index) {
    slides = document.querySelectorAll('.carousel-images img');
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function displayProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-variation').textContent = "Variasi: " + product.variation;
        document.getElementById('product-stars').textContent = product.stars;
        document.getElementById('product-reviews').textContent = `(${product.reviews} reviews)`;

        const carouselImagesDiv = document.getElementById('carousel-images');
        carouselImagesDiv.innerHTML = product.images.map((imgSrc, index) =>
            `<img src="${imgSrc}" alt="${product.title} Image ${index + 1}" class="${index === 0 ? 'active' : ''}">`
        ).join('');

        const colorOptionsDiv = document.getElementById('color-options');
        colorOptionsDiv.innerHTML = product.colors.map((colorSrc, index) =>
            `<img src="${colorSrc}" alt="Color ${index + 1}" onclick="changeColor(${index})">`
        ).join('');

        slides = document.querySelectorAll('.carousel-images img');
        showSlide(currentSlide);
    } else {
        document.querySelector('.main-container').innerHTML = '<p>Product not found.</p>';
    }
}

const productId = getProductIdFromURL();
displayProductDetails(productId);
