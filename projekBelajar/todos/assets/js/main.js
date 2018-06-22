$("input").keypress(function(e){
    let value = $(this).val();
    if (e.which === 13 && value !== "") {
        createNewTodo(value);
        $(this).val("");
    }
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("clicked");
});

$("#hideid").click(function(){
    $("input").fadeToggle();
});

$("ul").on("click", ".delete", function(){
    console.log($(this).parent().remove());
    $(this).parent().remove();
});

const createNewTodo = function(todo){
    $("ul").append(`
        <li><span class="delete">D</span>${todo}</li>
    `);
}