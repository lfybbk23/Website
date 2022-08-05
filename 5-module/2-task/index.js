function toggleText() {
  const hideAndShowButton = document.querySelector('.toggle-text-button');

  hideAndShowButton.addEventListener('click', () => {
    document.getElementById('text').toggleAttribute('hidden');
  });
}
