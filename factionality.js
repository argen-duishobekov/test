const addTodo = (e) => {
  let newTask = textIn.value;
  let date = setDate.value;

  if (newTask != "") {
    // let li = document.createElement("li");
    // li.className = "taskItem";
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
    // lable.append(newTask + "  " + date);
    // // -----------------------------------------------
    // li.append(lable);
    // li.append(doneBtn);
    // li.append(deleteBtn);
    // list.prepend(li);
    todoArray.push({
      text: newTask,
      checked: false,
      date,
    });

    localStorage.setItem("todos", JSON.stringify(todoArray));
    renderTodoItem();
    textIn.value = "";
    setDate.value = "";
  }
};

const completeTodo = (e) => {
  let todoTemporary = [...todoArray];

  let index = parseInt(e.target.parentNode.getAttribute('key'));

  let objElement = todoTemporary[index].checked;

  todoTemporary[index].checked = !objElement;
  // console.log(todoTemporary)

  localStorage.setItem("todos", JSON.stringify(todoTemporary));

  // let isDone = e.currentTarget.parentNode.classList.contains("done");
  let isDone = e.currentTarget.parentNode.classList.contains("taskItem-done");

  // isDone
  //   ? e.currentTarget.parentNode.classList.remove("done")
  //   : e.currentTarget.parentNode.classList.add("done");

  if(isDone){
    e.currentTarget.parentNode.classList.remove("taskItem-done")
   e.currentTarget.parentNode.classList.add("taskItem");
  }else {
    e.currentTarget.parentNode.classList.add("taskItem-done")
   e.currentTarget.parentNode.classList.remove("taskItem");
  }

  // e.currentTarget.parentNode.classList.toggle('done')
};
const deleteTodo = (e) => {
  let index = parseInt(e.target.parentNode.getAttribute('key'));

  todoArray.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todoArray));
  console.log(todoArray);

  renderTodoItem();

  // e.currentTarget.parentNode.remove(e.parentNode);
};
