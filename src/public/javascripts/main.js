function changeElementStyle(references) {
  references.forEach(reference => {
    let elements = document.querySelectorAll(reference.element);
    elements.forEach(element => {
      element.classList = reference.class;
    });
  });
}