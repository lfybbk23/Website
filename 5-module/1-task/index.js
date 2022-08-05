function hideSelf() {

  const hideSelfButton = document.querySelector('.hide-self-button');

  hideSelfButton.addEventListener('click', () => {
    document.querySelector('.hide-self-button').hidden = true;
  })
}
