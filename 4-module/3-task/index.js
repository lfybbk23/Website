function highlight(table) {

  for (let tr of table.children[1].rows) {

    const status = tr.cells[3].getAttribute('data-available');
    const gender = tr.cells[2].textContent;
    const age = tr.cells[1].textContent;

    const className = status === 'true' ? 'available' : 'unavailable';
    
    status ? tr.classList.add(className) : tr.setAttribute('hidden',true);

    gender === "m" ? tr.classList.add('male') : tr.classList.add('female');

    age < 18 ? tr.style.textDecoration = 'line-through' : null
    
  }
}




