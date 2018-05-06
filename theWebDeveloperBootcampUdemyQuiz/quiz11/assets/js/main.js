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
    $(".delete").click(function(){
        $(this).parent().remove();
    });
    $(".todo").click(function(){
        console.log("happy little things called love");
        $(this).toggleClass("done"); // sometimes not working. The problem is not solved yet
    });
}
function createTodo(todo) {
    return `
        <li>
            <button class="delete">delete</button>
            <p class="todo">${todo}</p>
        </li>
    `; //ES6's template strings
}