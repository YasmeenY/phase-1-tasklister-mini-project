document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', handleToDo);
});

function handleToDo(e){
  e.preventDefault();
  let taskForm = e.target;
  let inputValue = taskForm['new-task-description'].value
  let priority = document.getElementById('mySelect').value

  if(inputValue.length > 2) {
    let li = document.createElement('li');
    document.getElementById('tasks').appendChild(li);
    li.textContent = ` ${inputValue} `;
    li.style.color = priority;

    taskForm.reset();

    let btn = document.createElement('button');
    btn.addEventListener('click',handleDelete);
    btn.textContent = ' x ';
    li.appendChild(btn);

  }
  else {
    alert("Needs more Characters")
  }
}

function handleDelete(e){
  e.target.parentNode.remove();
}