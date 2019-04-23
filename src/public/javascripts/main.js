let $main = document.querySelector('main');
let $menu = document.getElementById('menu');
let $navbar = document.querySelector('#menu nav ul');
let $footer = document.querySelector('#menu footer');
let $menuButton = document.getElementById('menuButton');

$menuButton.addEventListener('click', () => {
    $menu.style.backgroundColor = ($menu.style.marginLeft != '-14rem' && $menu.style.marginLeft != '-100%') ? '#FFFFFF' : '#070719';
    if ($navbar.style.display != 'none') {
        $navbar.style.display = 'none';
        $footer.style.display = 'none';
    } else {
        $navbar.style.display = 'block';
        $footer.style.display = 'flex';
    }
    if (window.innerWidth > 800) {
        if ($menu.style.marginLeft != '-14rem') {
            $menu.style.marginLeft = '-14rem';
            $main.style.marginLeft = '0';
        } else {
            $menu.style.marginLeft = '0';
            $main.style.marginLeft = '18rem';
        }
    } else {
        if ($menu.style.marginLeft != '-100%') {
            $menu.style.marginLeft = '-100%';
        } else {
            $menu.style.marginLeft = '0';
        }
    }
});

document.body.onresize = () => {
    $menu.style.backgroundColor = ($menu.style.marginLeft != '-14rem' && $menu.style.marginLeft != '-100%') ? '#070719' : '#FFFFFF';
    if (window.innerWidth > 800) {
        if ($menu.style.marginLeft == '-14rem' || $menu.style.marginLeft == '-100%') {
            $menu.style.marginLeft = '-14rem';
            $main.style.marginLeft = '0';
        } else {
            $menu.style.marginLeft = '0';
            $main.style.marginLeft = '18rem';
        }
    } else {
        if ($menu.style.marginLeft == '-14rem' || $menu.style.marginLeft == '-100%') {
            $menu.style.marginLeft = '-100%';
        } else {
            $menu.style.marginLeft = '0';
        }
        $main.style.marginLeft = '0';
    }
}

let $inputs = document.querySelectorAll('input');
let $labels = document.querySelectorAll('label');

$inputs.forEach($input => {
    $input.addEventListener('focus', () => {
        $label = $input.labels[0].children[0];
        $label.style.marginTop = '-1.5rem';
        $label.style.color = '#15DB95';
    });
    $input.addEventListener('blur', () => {
        $label = $input.labels[0].children[0];
        $label.style.color = '#A4A4A4';
        if ($input.value == '') {
            $label.style.marginTop = '0';
        }
    });
});