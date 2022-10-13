const addTodoForm = document.getElementById("addNewTodo");
const [TodoList] = document.getElementsByTagName("ul");
// submitting the form

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const [input] = addTodoForm.children;
  if (!input.value) return;

  //    create a new element

  let oldInnerHtml = TodoList.innerHTML;
  const todoitemId = Math.trunc(Math.random() * 9999);
  oldInnerHtml += `<li id="todo-${todoitemId}">
  <div class="single_todo">
    ${input.value}
  </div>
  <div class="singleTodo-btns">
    <button onclick="todoDone(${todoitemId})">
      <iconify-icon icon="ic:round-done-outline" width="25px"></iconify-icon>
    </button>
    <button onclick="deleteTodo(${todoitemId})">
      <iconify-icon icon="ep:delete-filled" width="25px"></iconify-icon>
    </button>
  </div>
</li>`;
  TodoList.innerHTML = oldInnerHtml;
  input.value = "";
});

function deleteTodo(id) {
  document.getElementById(`todo-${id}`).remove();
}

const todoDone = (id) => {
  const currentTodo = document.getElementById(`todo-${id}`);
  const [todoText] = currentTodo.children;
  todoText.classList.toggle("done");
};
