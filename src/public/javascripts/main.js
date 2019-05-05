function menuControl() {
  let $menuButtonRight = document.getElementById('menuButtonRight');
  let $main = document.querySelector('main');
  let $menu = document.getElementById('menu');
  let $menuDiv = document.querySelector('#menu div');
  let $menuNav = document.querySelector('#menu nav');
  let $menuLogo = document.getElementById('menuLogo');
  let $menuNavUl = document.querySelector('#menu nav ul');

  if ($menuNav.style.display != 'none') {
    $menuNav.style.display = 'none';
    $menuLogo.style.display = 'none';
    $menuButtonRight.style.display = 'inline-block';
    if (window.innerWidth > 800) {
      $menu.style.marginLeft = '-16rem';
      $menuDiv.style.left = '16rem';
      $main.style.marginLeft = '4rem';
    } else {
      $menu.style.marginLeft = '-100%';
      $menuDiv.style.left = '100%';
    }
  } else {
    $menu.style.marginLeft = '0';
    $menuDiv.style.left = '0';
    $menuNav.style.display = 'inline-block';
    $menuLogo.style.display = 'flex';
    $menuButtonRight.style.display = 'none';
    if (window.innerWidth > 800) {
      $main.style.marginLeft = '20rem';
    } else {
      $menuNavUl.style.marginLeft = '4rem';
    }
  }
}

function listenClickMenuButton() {
  let $menuButtonLeft = document.getElementById('menuButton');
  let $menuButtonRight = document.getElementById('menuButtonRight');

  $menuButtonRight.addEventListener('click', () => {
    menuControl();
  });

  $menuButtonLeft.addEventListener('click', () => {
    menuControl();
  });
}

function startbehaviorNormalInputs() {
  let $inputs = document.querySelectorAll('.input-button');
  $inputs.forEach($input => {
    $input.addEventListener('focus', () => {
      $label = $input.labels[0].children[0];
      $label.style.marginTop = '-1.5rem';
      $label.style.color = '#0040FF';
    });
    $input.addEventListener('blur', () => {
      $label = $input.labels[0].children[0];
      $label.style.color = '#A4A4A4';
      if ($input.value == '') {
        $label.style.marginTop = '0';
      }
    });
  });
}

startbehaviorNormalInputs();
listenClickMenuButton();