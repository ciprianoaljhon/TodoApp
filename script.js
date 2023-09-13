const todoContainer = document.querySelector('.todos')
//Add Task
const addBtn = document.querySelector('.add').addEventListener('click', function (e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value.length > 3) {
        let taskContainer = document.createElement('article')
        let task = document.createElement('p');
        let deleteTask = document.createElement('button');
        let editSave = document.createElement('button');
        task.innerText = input.value

        editSave.innerText = 'Edit'
        editSave.addEventListener('click', editTask)
        deleteTask.innerText = 'Delete';
        deleteTask.classList.add('delete')
        deleteTask.addEventListener('click', deleteTodo)

        taskContainer.append(task)
        taskContainer.append(editSave)
        taskContainer.append(deleteTask)
        todoContainer.append(taskContainer);
        input.removeAttribute("placeholder");

    } else {
        input.setAttribute("placeholder", "Enter 3 or more characters");
    }
    input.value = ''

})

function deleteTodo() {
    this.parentElement.remove()
}

function editTask() {
    let el = this.parentNode.childNodes[0]
    let editing = !(this.innerText === 'Save')

    let replaceTag = editing ? document.createElement('input') : document.createElement('p');
    if (editing) {
        replaceTag.style.borderColor = 'red';
        replaceTag.value = el.innerText
    } else {
        replaceTag.innerText = el.value
    }

    el.replaceWith(replaceTag)
    this.innerText = editing ? 'Save' : 'Edit'
}



