{
    const tasks = [
    ]

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();  
    }
    
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index)
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index)
            });
        });        
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list_singleTask grid"
                    
                >
                    
                    <div class="grid__item1" >
                        <button class="js-done list__buttonDone flex" >${task.done ? "✔" : ""}</button>
                    </div>

                    <div class="grid__item2 ${task.done ? "grid__item2--taskDone" : ""}">
                         ${task.content}
                    </div>

                    <div class="grid__item3">
                        <button class="js-remove list__buttonDelete flex">🗑</button>
                    </div>

                    
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();                 
    };

    const init = () => {
        render();
    
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);            
    };

    init()
}