
let navBar = document.getElementById('navigation-bar');
let home = document.getElementById('home');

let mng_cus = document.getElementById('manage-customer');
let mng_store = document.getElementById('mng-store');

let place_order = document.getElementById('place-order');

{
    navBar.style.display = 'block';
    home.style.display = 'block';

    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';

    place_order.style.display = 'none';
}


function logoutBtn() {
    navBar.style.display = 'block';
    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';

    place_order.style.display = 'none';
}

function placeOrders() {
    place_order.style.display = 'block';
    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    setCusIds();
    setItemIds();

}


function mngStore() {
    mng_store.style.display = 'block';
    home.style.display = 'none';
    mng_cus.style.display = 'none';

    place_order.style.display = 'none';
}

function mngCustomer() {
    mng_cus.style.display = 'block';
    home.style.display = 'none';
    mng_store.style.display = 'none';

    place_order.style.display = 'none';
}

function goHome() {
    home.style.display = 'block';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';

    place_order.style.display = 'none';
}