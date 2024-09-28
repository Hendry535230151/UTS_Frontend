let totalItemCount = document.querySelector('.item__list h3');
let totalPricePerItem = document.querySelectorAll('.price__container p');

function countProduct() {
    const item = document.querySelectorAll('.item');
    const totalItems = item.length;
    totalItemCount.textContent = `Total Item (${totalItems})`;
}

function countPricePerItem() {
    let totalPricePerItem = document.querySelectorAll('.price__container p');
    let inputField = document.querySelectorAll('.count__container input');
    inputField.forEach((input, index) => {
        let inputValue = parseInt(input.value) || 0;
        let totalPrice = 300000 * inputValue;
        totalPricePerItem[index].textContent = `Rp. ${totalPrice.toLocaleString()}`;
    });
}

function removeItem(itemElement) {
    itemElement.remove();
    countProduct();
    calculateCheckedItems();
    countPricePerItem();
    updateEventListeners();
}

function calculateCheckedItems() {
    let totalCheckedItems = 0;
    let totalPriceCheckedItems = 0;
    
    const checkboxes = document.querySelectorAll('.checkout__button');
    checkboxes.forEach((checkbox, index) => {
        if(checkbox.checked) {
            totalCheckedItems++;
            let inputValue = parseInt(document.querySelectorAll('.count__container input')[index].value) || 0;
            totalPriceCheckedItems += 300000 * inputValue; 
        }
    });

    let totalAllProduct = document.querySelector('.total__price .checkout__item p') || 0
    totalAllProduct.textContent = `Subtotal Product (${totalCheckedItems})`;
    let totalAllPrice = document.querySelector('.total__payment .right__container p') || 0
    totalAllPrice.textContent = `Rp. ${totalPriceCheckedItems.toLocaleString()}`;
}

function updateEventListeners() {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        let minButton = item.querySelector(".count__container button:first-child");
        let plusButton = item.querySelector(".count__container button:last-child");
        let inputField = item.querySelector('.count__container input');
        let close_X = item.querySelector('.xclose__right button');
        let checkbox = item.querySelector('.checkout__button');

        close_X.onclick = function() {
            removeItem(item);
        };

        minButton.onclick = function (){
            let value_1 = parseInt(inputField.value) || 1;
            if (value_1 > 1 && value_1 != 1) {
                inputField.value = value_1 - 1;
            } else if (value_1 === 1) {
                window.alert("Apa anda yakin");
            } 
            else {
                removeItem(item);
            }
            countPricePerItem();
            calculateCheckedItems();
        };

        plusButton.onclick = function() {
            let value_2 = parseInt(inputField.value) || 0;
            inputField.value = value_2 + 1;
            countPricePerItem();
            calculateCheckedItems();
        };

        checkbox.onchange = function() {
            calculateCheckedItems(); 
        };
    });
}

countProduct();
updateEventListeners();
countPricePerItem();
calculateCheckedItems();
