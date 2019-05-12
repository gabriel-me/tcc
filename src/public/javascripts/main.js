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
    $dropdownMenu = $dropdown.children[1];
    $dropdown.addEventListener('click', () => {
      $dropdownMenu.style.display = 'flex';
    });
    $dropdown.addEventListener('focusout', () => {
      $dropdownMenu.style.display = 'none';
    });
  });
}

listenDropdownButton();