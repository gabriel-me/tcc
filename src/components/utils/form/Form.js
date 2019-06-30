export default {
  getFormValues: (form) => {
    let formElements = document.querySelector(form).elements
    let inputsElements = [...formElements].filter(i => i.type !== 'submit')
    return inputsElements.map(i => i.value)
  }
}