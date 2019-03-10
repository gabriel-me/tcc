let $menu = document.getElementById('menu');
let $navbar = document.querySelector('#menu nav');
let $footer = document.querySelector('#menu footer');
let $menuButton = document.getElementById('menuButton');

$menuButton.addEventListener('click', () => {
    if(window.innerWidth > 800) {
        if ($menu.style.marginLeft != '-15rem') {
            $menu.style.marginLeft = '-15rem';
            $menu.style.backgroundColor = 'white';
            $navbar.style.display = 'none';
        } else {
            $menu.style.marginLeft = '0rem';
            $menu.style.backgroundColor = '#070719';
            $navbar.style.display = 'block';
        }
    } else {
        if ($menu.style.marginLeft != '-100%') {
            $menu.style.marginLeft = '-100%';
        } else {
            $menu.style.marginLeft = '0%';
        }
        $menu.style.backgroundColor = '#070719';
        $navbar.style.display = 'block';
    }
});