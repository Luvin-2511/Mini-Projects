const todoform = document.querySelector('form');
const todolist = document.getElementById("tasklist");
const todoinput = document.getElementById("tasinput");

let alltodos = [];

todoform.addEventListener("submit", function (e) {
    e.preventDefault();
    addtodo();
});

function addtodo() {
    const todotext = todoinput.value.trim();
    if (todotext.length > 0) {
        alltodos.push(todotext);
        createtodo(todotext);
        todoinput.value = "";
    }
}

function createtodo(todoText) {
    const li = document.createElement("li");
    li.className = "todo";
    const uniqueId = "todo" + Date.now();

    li.innerHTML = `
        <input type="checkbox" id="${uniqueId}">
        <label class="customcheck" for="${uniqueId}">
            <img src="tick.svg" alt="">
        </label>
        <label class="todotext" for="${uniqueId}">
            ${todoText}
        </label>
        <button class="dltbtn">
            <img src="delete.svg" alt="">
        </button>
    `;
    const btn = li.querySelector("button");
    btn.addEventListener("click", () => {
        li.remove();
    });

    todolist.appendChild(li);
}
