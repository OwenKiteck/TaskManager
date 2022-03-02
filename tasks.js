// VARIABLES
let answer;
let repeat = true;
let remove;
let fullList = ``;
let number = 0;
const tasks = [
    `Charge MacBook`, 
    `Master JavaScript`
];

while (repeat) {
    // Prompt for option answer
    answer = prompt(`TASK MANAGER
    
    What would you like to do (Please enter one of the options below):
    "TASKS" - Display all tasks
    "NEW" - Add a new task
    "REMOVE" - Remove a task
    "CLOSE" - Close the task manager
    `);
    answer = answer.toUpperCase();

    if (answer === `TASKS`) {
        for (i = 0; i < tasks.length; i++) {
            fullList = `${fullList}
            ${tasks[i]}`;
        };
        alert(fullList)
        fullList = ``;

            // This is a different way (a little longer, but mostly the same)
        // for (item of tasks) {
        //     fullList = `${fullList} 
        //     ${item}`
        // };

    } else if (answer === `NEW`) {
        newTasks = prompt(`Enter a new task`);
        tasks.push(newTasks);

    } else if (answer === `REMOVE`) {
        for (i = 0; i < tasks.length; i++) {
            fullList = `${fullList}
            ${i + 1}: ${tasks[i]}`;
        };
        remove = prompt(`Please enter a number to remove:
        ${fullList}`);
        remove = parseInt(remove);
        
        while (!remove) {
            remove = prompt(`Please enter a number to remove:
            ${fullList}`)
            remove = sparseInt(remove);
        };
        remove -= 1;
        tasks.splice(remove, 1)
        fullList = ``;

            // This is a different way (a little longer, but mostly the same)
        // for (item of tasks) {
        //     number += 1;
        //     fullList = `${fullList} 
        //     ${number}: ${item}`
        // };
        // remove = prompt(`Please enter a number to remove:
        // ${fullList}`
        // );
        // number = 0
        // fullList = ``;

    } else if (answer === `CLOSE`) {
        break;
    };
}
