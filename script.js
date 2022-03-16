const createItem = (todo, id) => {
  let item = `
      <li
       key = '${id}' 
      class= ${todo.checked ? "taskItem-done" : "taskItem"} >
      ${todo.text} ${todo.date ? todo.date : ""}
          <img class = "btn" src="check-icon.png" onclick="completeTodo(event)"/>
          <img class = "btn" src="delete-icon.png" onclick="deleteTodo(event)"/>
      </li>
  `;
  // let li = document.createElement("li");
  // li.className = todo.checked ? "taskItem done" : "taskItem";
  // li.id = id;
  // // -----------------------------------------------
  // let doneBtn = document.createElement("img");
  // doneBtn.src = "check-icon.png";
  // doneBtn.className = "btn";
  // doneBtn.addEventListener("click", completeTodo);
  // // ----------------------------------------------
  // let deleteBtn = document.createElement("img");
  // deleteBtn.src = "delete-icon.png";
  // deleteBtn.className = "btn";
  // deleteBtn.addEventListener("click", deleteTodo);
  // // ----------------------------------------------
  // let lable = document.createElement("label");
  // lable.append(item.text + "  " + item.date);
  // // -----------------------------------------------
  // li.append(lable);
  // li.append(doneBtn);
  // li.append(deleteBtn);
  // list.prepend(li);
  return item;
};

const renderTodoItem = () => {
  list.innerHTML = "";

  let items = [];

  // console.log(todoArray.length)
  // console.log(Boolean(1))

  todoArray.length ?
  todoArray.map((todo, id) => {
    items.unshift(createItem(todo, id));

    list.innerHTML = items.join("");

  }) :

  list.prepend('Учурда тапшырма жок')
};

renderTodoItem();
