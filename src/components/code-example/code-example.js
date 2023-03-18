
function initCodeExample() {
  const buttonsArray = document.querySelectorAll('[data-action="code-example-copy-button"]');
  buttonsArray.forEach((button) => {
    button.addEventListener('click', function () {
      const code = button.closest('[data-action="code-example-wrapper"]').querySelector('[data-action="code-example-copy"]').textContent
      navigator.clipboard.writeText(code)
    })  
  })
};

export {
  initCodeExample
}
