/*
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector(".task-input");
  const addButton = document.querySelector(".add-btn");
  const taskList = document.querySelector(".task-list");

  addButton.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
      const li = document.createElement("li");
      li.textContent = taskValue;
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
      taskList.appendChild(li);
      taskInput.value = ""; // Clear the input
    }
  });
});
*/
document.addEventListener("DOMContentLoaded", () => {
    const taskInput=document.querySelector(".task-input");
    const addButton=document.querySelector(".add-btn");
    const taskList=document.querySelector(".task-list");
    addButton.addEventListener("click",()=>{
        const taskValue=taskInput.value.trim();
        if(taskValue){
            const li=document.createElement("li");
            li.textContent=taskValue;
            li.addEventListener("click",()=>{
                li.c("completed");
            });
            li.addEventListener("dblclick",()=>{
                taskList.removeChild(li);
            })
            taskList.appendChild(li);
            taskInput.value=""; 
        }
        


    })
});