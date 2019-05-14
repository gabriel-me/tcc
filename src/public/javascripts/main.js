function changeElementStyle(references) {
  references.forEach(reference => {
    let elements = document.querySelectorAll(reference.element);
    elements.forEach(element => {
      element.classList = reference.class;
    });
  });
}

function listenDropdownButton() {
  let $dropdowns = document.querySelectorAll('.dropdown');
  $dropdowns.forEach($dropdown => {
    $dropdown.addEventListener('click', () => {
      $dropdownMenu = $dropdown.children[1];
      $dropdownMenu.style.display = 'flex';
    });
    $dropdown.addEventListener('focusout', () => {
      $dropdownMenu = $dropdown.children[1];
      $dropdownMenu.style.display = 'none';
    });
  });
}

function whileLoadingPage() {
  let loading = {
    start: () => {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>`
      );
    },
    complete: () => {
      let loading = document.querySelector('.spinner');
      loading.remove(loading);
    }
  };
  loading.start();
  document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
      loading.complete();
    }
  });
}

whileLoadingPage();
listenDropdownButton();