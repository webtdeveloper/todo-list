const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoInputValue = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoInputValue}</span>
        <div class="todo-button">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
    `;
    newLi.innerHTML = newLiInnerHtml;
    if(todoInput.value != ""){
        todoList.append(newLi);
    }
    todoInput.value = "";
})

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains('done')){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains('remove')){
        const liRemove = e.target.parentNode.parentNode;
        liRemove.remove();
    }
})