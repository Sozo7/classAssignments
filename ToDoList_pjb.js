/*// It should 
var toDos = [item 1, item 2, item 3, item 4];


// It should have a function o display todos.
function displayTodos(){
    console.log('My todos:', toDos);
}
// It should have a function to add todos.
function addTodo(todo) {
    toDos.push(todo);
    displayTodos();
}

// It should have a function to change todos.
function changeTodo(position, newValue){
    todo [position] = newValue;
    displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position){
    toDos.splice(position, 1);
    displayTodos();
}
*/

window.onload = function () {
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var button = document.getElementById('button');
    var list = document.getElementById('list');
    var id = 1;

    button.addEventListener('click', addTodoItem);
}