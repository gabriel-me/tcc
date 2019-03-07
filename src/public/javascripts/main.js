let $menu = document.getElementById('menu');
let $footer = document.querySelector('#menu footer');
let $menuButton = document.getElementById('menuButton');

$menuButton.addEventListener('click', () => {
    if(window.innerWidth > 600) {
        if ($menu.style.marginLeft != '-17%') {
            $menu.style.marginLeft = '-17%';
            $footer.style.borderColor = 'white';
        } else {
            $menu.style.marginLeft = '0%';
            $footer.style.borderColor = '#E6E6E6';
        }
    } else {
        if ($menu.style.marginLeft != '-100%') {
            $menu.style.marginLeft = '-100%';
        } else {
            $menu.style.marginLeft = '0%';
        }
    }
});