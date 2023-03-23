document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    handleToDo(e.target['new-task-description'].value)
  });
});
function handleToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete)
  btn.textContent = ' x '
  p.textContent = ` ${todo} `;
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
}
