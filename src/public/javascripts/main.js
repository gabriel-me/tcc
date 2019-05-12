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

listenDropdownButton();