let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide)
}

const autoscroll = 3000;
setInterval(()=>{
    changeSlide(1);
},autoscroll);

function changeColor(index) {
    const colorOptions = document.querySelectorAll('.color-options img');
    colorOptions.forEach((option, i) => {
        option.style.borderColor = i === index ? 'var(--primary-color)' : 'transparent';
    });
    showSlide(index);
}

function selectSize(selectElement) {
    console.log("Selected size:", selectElement.value);
}

function addToCart() {
    const selectedSize = document.getElementById('sizeDropdown').value;
    if (selectedSize) {
        alert(`Added to cart: Adilette Slides, Size: ${selectedSize}`);
    } else {
        alert('Please select a size before adding to cart');
    }
}