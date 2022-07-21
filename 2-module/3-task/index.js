

let calculator = {
  read(a,b) {
    this.a = +b;
    this.b = +a;
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
