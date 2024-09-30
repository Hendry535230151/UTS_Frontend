let totalItemCount = document.querySelector('.item__list h3');

function bayar() {
    alert("Berhasil Melakukan Pembayaran");
    localStorage.clear();
    location.reload();
}

function getCart() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

function countProduct() {
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;
    totalItemCount.textContent = `Total Item (${totalItems})`;
}

function countPricePerItem() {
    const totalPricePerItem = document.querySelectorAll('.price__container p');
    const inputFields = document.querySelectorAll('.count__container input');
    inputFields.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        const productPrice = 300000; // Replace with the product's actual price if needed
        const totalPrice = productPrice * quantity;
        totalPricePerItem[index].textContent = `Rp. ${totalPrice.toLocaleString()}`;
    });
}

function removeItem(itemElement) {
    itemElement.remove();
    countProduct();
    calculateCheckedItems();
    countPricePerItem();
}

function calculateCheckedItems() {
    let totalCheckedItems = 0;
    let totalPriceCheckedItems = 0;

    const checkboxes = document.querySelectorAll('.checkout__button');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
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
    items.forEach((item) => {
        const minButton = item.querySelector(".count__container button:first-child");
        const plusButton = item.querySelector(".count__container button:last-child");
        const inputField = item.querySelector('.count__container input');
        const close_X = item.querySelector('.xclose__right button');
        const checkbox = item.querySelector('.checkout__button');

        close_X.onclick = function() {
            removeItem(item);
        };

        minButton.onclick = function() {
            let quantity = parseInt(inputField.value) || 1;
            if (quantity > 1) {
                inputField.value = quantity - 1;
            } else {
                removeItem(item);
            }
            countPricePerItem();
            calculateCheckedItems();
        };

        plusButton.onclick = function() {
            let quantity = parseInt(inputField.value) || 0;
            inputField.value = quantity + 1;
            countPricePerItem();
            calculateCheckedItems();
        };

        checkbox.onchange = function() {
            calculateCheckedItems();
        };
    });
}

function loadCartItems() {
    const cartItems = getCart();
    const itemList = document.querySelector('.item__list');

    itemList.innerHTML = '';

    cartItems.forEach(product => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <div class="checkout__left">
                <input type="checkbox" class="checkout__button">
            </div>
            <div class="xclose__right">
                <button class="xclose__button">&times;</button>
            </div>
            <div class="item__img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="item__description">
                <h6>${product.title}</h6>
                <p>${product.description}</p>
                <div class="total__item__price">
                    <div class="count__container">
                        <button>-</button>
                        <input type="number" class="count__product" value="${product.quantity}" min="1" disabled>
                        <button>+</button>
                    </div>
                    <div class="price__container">
                        <p>Rp. ${(product.price * product.quantity).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `;
        itemList.appendChild(item);
    });
    countProduct();
    updateEventListeners();
    countPricePerItem();
    calculateCheckedItems();
}

//inisialisasi loading
loadCartItems();