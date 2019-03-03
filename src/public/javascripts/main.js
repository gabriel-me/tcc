let $menu = document.getElementById('menu');
let $arrowButton = document.getElementById('arrowButton');

$arrowButton.addEventListener('click', () => {
    if(window.innerWidth > 600) {
        ($menu.style.marginLeft != '-17%') ? $menu.style.marginLeft = '-17%' : $menu.style.marginLeft = '0%';
    } else {
        ($menu.style.marginLeft != '-100%') ? $menu.style.marginLeft = '-100%' : $menu.style.marginLeft = '0%';
    }
});