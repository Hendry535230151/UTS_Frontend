const minButton = document.querySelectorAll(".count__container button:first-child");
const plusButton = document.querySelectorAll(".count__container button:last-child");
const inputField = document.querySelectorAll('.count__container input');
const totalItemCount = document.querySelector('.item__list h3');
const item = document.querySelectorAll('.item');

function countProduct() {
    let totalItems = 0;
    inputField.forEach(input => {
        totalItems += parseInt(input.value);
    });
    totalItemCount.textContent = `Total Item (${totalItems})`;
}

function removeItem(index) {
    item[index].remove();
    countProduct();
}

function subtotalPrice() {
    
}

minButton.forEach((min, index) => {
    min.addEventListener('click', function() {
        let value_1 = parseInt(inputField[index].value);
        inputField[index].value = value_1 - 1;

        if(value_1 <= 1) {
            removeItem(index);
        }
    });
});

plusButton.forEach((min, index) => {
    min.addEventListener('click', function() {
        let value_2 = parseInt(inputField[index].value);
        inputField[index].value = value_2 + 1;
    });
});     

countProduct();