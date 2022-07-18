/**
 * Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(userName) {
  if (userName === null || userName === '') {
      return false;
  } else if ( userName.length < 4) {
      return false;
  } else if (userName.indexOf(' ') >= 0) {
      return false;
  } else {
      return true;
  }
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
      print(`Welcome back, ${userName}!`);
  } else {
      print('Некорректное имя');
  }
}

sayHello();