const imgS = document.addEventListener("load", showSite())

function showSite () {
    document.querySelectorAll('img').forEach((im)=>{im.classList.add('lazyload')});
    setTimeout(loadhtml, 3000);
    setTimeout(delloadhtml, 4000);
}

function loadhtml () {
    document.querySelector('.loader').classList.add('loader-close')
}

function delloadhtml () {
    document.querySelector('.loader').classList.add('loader-deley')
}

// menu
const ref = {
    minimenu: document.querySelector('.menu__mini'),
    openModalBtn: document.querySelector("[menu-mobile-open]"),

    logoModalBtn: document.querySelector("[mini__logo]"),
    closeModalBtn1: document.querySelector("[menu-mini-close-one]"),
    closeModalBtn2: document.querySelector("[menu-mini-close-two]"),
    closeModalBtn3: document.querySelector("[menu-mini-close-three]")
    
}

const showMini = () => {
    ref.minimenu.classList.add('show');
}

const closeMini = () => {
    ref.minimenu.classList.remove('show');
}

ref.openModalBtn.addEventListener('click', showMini);
ref.logoModalBtn.addEventListener('click', closeMini);
ref.closeModalBtn1.addEventListener('click', closeMini); 
ref.closeModalBtn2.addEventListener('click', closeMini); 
ref.closeModalBtn3.addEventListener('click', closeMini); 

