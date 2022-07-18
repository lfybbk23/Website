function ucFirst(str) {

  const firstCapitalized = str.charAt(0).toUpperCase() + str.slice(1);
  
  return firstCapitalized;
}

const str = prompt('Input string', '');

console.log(ucFirst(str));

// Тест пропустил, но ругался, хотелось бы знать почему
