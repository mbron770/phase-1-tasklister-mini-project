document.addEventListener("DOMContentLoaded", () => {
 
 
  const form=document.body.querySelector("#create-task-form")
  form.addEventListener("submit", e => {
    e.preventDefault()

    const formValue = document.querySelector("#new-task-description").value
    const newTask = document.createElement('li')
    newTask.textContent = formValue
    const taskList = document.querySelector("#tasks")
    taskList.appendChild(newTask)
    e.target.reset()


    //attempt at delete task functionality

    // const deleteButton = document.createElement('button') 
    // deleteButton.id = "deleteButton"
    // deleteButton.textContent = "Delete"
    // taskList.appendChild(deleteButton)

  }) 

})
