console.log("connected");

const addSpan = $("#plus");
const input = $("#newtodo");
const ulList = $("ul");


refreshTodoList();

input.keypress(function(e){
    let todo = $(this).val();
    if(e.which === 13 && todo !== ""){
        let newTodo = createTodo(todo);
        ulList.append(newTodo);
        input.val("");

        refreshTodoList();
    }
});

function refreshTodoList() {
    let deleteBtns = $(".delete");
    for(let i=0; i<deleteBtns.length; i++){
        deleteBtns[i].onclick = function() {
            $(this)[0].parentElement.remove();
        };
    }
    for(let todoP of $(".todo")) {
        todoP.onclick = function(){
            $(this)[0].classList.toggle("done");
        }
    }
}
function createTodo(todo) {
    return `
        <li>
            <button class="delete">delete</button>
            <p class="todo">${todo}</p>
        </li>
    `; //ES6's template strings
}