
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsIndex from './modules/scriptsPaginas/index.js';

// PAGES 
const pageIndex = new Dom().el("#page__index")

if (pageIndex) { // ★ INDEX (HOME)
    new Dom().bodyClass("body__index");
    scriptsIndex();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});


const btnMobile = document.getElementById('menu-hamburguer');

    function toggleMenu(){
        
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

btnMobile.addEventListener('click', toggleMenu);




