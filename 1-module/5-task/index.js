function truncate(str, maxlength) {

  if (str.length > maxlength) {
      return str.slice(0, maxlength -1) + "…";
  } else {
    return str;
  }
  
}

console.log(truncate('This string has been cut', 20))

// Сначала решил по-другому, даже в консоль все правильно выводилось, но тест не пропустил.
// Вроде как-то так было:

// function ucFirst(str) {

//   if (str.length > 20) {
//     return str.slice(0, 20) + "…";
//   }
//   if (str.length <= 20) {
//     return str;
//   }

// }

// let str = prompt ('Input text','');

// console.log(ucFirst(str));
