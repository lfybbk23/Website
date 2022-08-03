

function makeFriendsList(arr) {

  const list = document.createElement('ul');
  
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement('li');
      const name = arr[i].firstName;
      const lastName = arr[i].lastName;
      
      li.innerText = `${name} ${lastName}`;
      list.append(li);
    }

  return list;
}