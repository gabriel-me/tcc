let $menu = document.getElementById('menu');
let $navbar = document.querySelector('#menu nav');
let $footer = document.querySelector('#menu footer');
let $menuButton = document.getElementById('menuButton');
let $menuHeader = $menu.children[0];
let $menuFooter = $menu.children[2];

$menuButton.addEventListener('click', () => {
    if(window.innerWidth > 800) {
        if ($menu.style.marginLeft != '-14rem') {
            $menu.style.marginLeft = '-14rem';
            $menu.style.backgroundColor = 'white';
            $menuHeader.style.backgroundColor = 'white';
            $menuFooter.style.backgroundColor = 'white';
            $navbar.style.display = 'none';
        } else {
            $menu.style.marginLeft = '0rem';
            $menu.style.backgroundColor = '#070719';
            $menuHeader.style.backgroundColor = '#070719';
            $menuFooter.style.backgroundColor = '#070719';
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

document.body.onresize = () => {
    if (window.innerWidth > 800) {
        if ($menu.style.marginLeft == '-100%') {
            $menu.style.marginLeft = '-14rem';
            $menu.style.backgroundColor = 'white';
            $menuHeader.style.backgroundColor = 'white';
            $menuFooter.style.backgroundColor = 'white';
            $navbar.style.display = 'none';
        }
    } else {
        if ($menu.style.marginLeft == '-14rem') {
            $menu.style.marginLeft = '-100%';
        }
    }
}

let $inputs = document.querySelectorAll('input');
let $labels = document.querySelectorAll('label');

$inputs.forEach($input => {
    $input.addEventListener('focus', () => {
        $label = $input.labels[0].children[0];
        $label.style.marginTop = '-1.5rem';
        $label.style.color = '#0080FF';
    });
    $input.addEventListener('blur', () => {
        $label = $input.labels[0].children[0];
        $label.style.color = '#A4A4A4';
        if ($input.value == '') {
            $label.style.marginTop = '0';
        }
    });
});