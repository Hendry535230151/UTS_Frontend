$(document).ready(function() {
    function filterProducts() {
        let searchValue = $('#search').val().toLowerCase();
        let selectedCategory = $('#category').val();
        let selectedPrice = $('#price').val();

        $('.product_item').each(function() {
            let productName = $(this).find('h3').text().toLowerCase();
            let productCategory = $(this).data('category');
            let productPrice = parseInt($(this).find('p').text().replace(/[^0-9]/g, ''));

            let searchMatch = productName.includes(searchValue);
            let categoryMatch = selectedCategory === 'all' || productCategory === selectedCategory;
            let priceMatch = false;

            if (selectedPrice === 'low') {
                priceMatch = productPrice < 100000;
            } else if (selectedPrice === 'mid') {
                priceMatch = productPrice >= 100000 && productPrice <= 500000;
            } else if (selectedPrice === 'high') {
                priceMatch = productPrice > 500000;
            } else {
                priceMatch = true;
            }

            if (searchMatch && categoryMatch && priceMatch) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    $('#search').on('input', filterProducts);
    $('#category').on('change', filterProducts);
    $('#price').on('change', filterProducts);
});
