var addtodo = document.querySelector('#addtodo-btn');
var todosList = document.querySelector('#todosList');
var dialogue = document.querySelector('.dialogue')
var addList = document.querySelector('#add-list');
var names = document.querySelector('#name');
var title = document.querySelector('.title .main-title');
var mytempid = Math.random().toString().substr(-6);
addList.addEventListener('click', function(){
    mytempid = Math.random().toString().substr(-6);
    title.innerText = 'To Do : ' + mytempid;
    dialogue.classList.add('open');
});
var closeDialogue = document.querySelector('.Exit');
closeDialogue.addEventListener('click', function(){
    dialogue.classList.remove('open');
})

var myTodos = [{value:'wake up', id:'1'}];
function createTodo(name, id){
    let list = document.createElement('li');
    let text = document.createElement('div');
    let btn = document.createElement('button');
    text.innerText = name;
    btn.setAttribute('class', 'btn');
    btn.innerText = 'done';
    list.appendChild(text);
    btn.setAttribute("onclick", "deleteTodo("+id+")")
    list.appendChild(btn);
    todosList.appendChild(list);
}

function updateTodos(){
    todosList.innerHTML = " ";
    for (a = 0; a < myTodos.length; a++){
        createTodo(myTodos[a].value, myTodos[a].id);
    }
};
function deleteTodo(id){
    myTodos =  myTodos.filter(function(value){return value.id != id});
    updateTodos();
}
addtodo.addEventListener('click', function(){
    myTodos.push({value: names.value, id: mytempid});
    names.value = '';
    updateTodos();
    dialogue.classList.remove('open');

})
updateTodos();