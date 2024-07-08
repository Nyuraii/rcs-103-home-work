document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  if (taskDate === '') {
    alert('Please select a date.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');

  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = `${taskText} - ${taskDate}`;
  taskItem.appendChild(taskTextNode);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    const newText = prompt('Edit your task:', taskTextNode.textContent.split(' - ')[0]);
    const newDate = prompt('Edit your date:', taskDate);
    if (newText !== null && newDate !== null) {
      taskTextNode.textContent = `${newText.trim()} - ${newDate.trim()}`;
    }
  });

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(editButton);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  dateInput.value = '';
}
