const buttons = document.querySelectorAll('.navbar__position button');
const exploreBtn = document.getElementById('exploreButton');
const categoryBx = document.getElementById('categoryBox')
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



    // // Ambil elemen dengan id exp__nav dan exp__container
    // const expNav = document.getElementById('exp__nav');
    // const expContainer = document.getElementById('exp__container');

    // // Tambahkan event listener untuk mengubah class hide
    // expNav.addEventListener('click', function() {
    //     expContainer.classList.toggle('hide'); // toggle class hide untuk show/hide elemen
    // });
