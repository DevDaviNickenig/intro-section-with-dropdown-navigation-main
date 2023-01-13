const btnMobile = document.getElementById('btn-mobile');

function toogleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);



const btnMobile__features = document.getElementById('btn-mobile__features');

function toogleMenu__features () {
    const nav = document.getElementById('nav__features');
    nav.classList.toggle('active');
}

btnMobile__features.addEventListener('click', toogleMenu__features);

const btnMobile__company = document.getElementById('btn-mobile__company');

function toogleMenu__company () {
    const nav = document.getElementById('nav__company');
    nav.classList.toggle('active');
}

btnMobile__company.addEventListener('click', toogleMenu__company);