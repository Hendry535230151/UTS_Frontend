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
