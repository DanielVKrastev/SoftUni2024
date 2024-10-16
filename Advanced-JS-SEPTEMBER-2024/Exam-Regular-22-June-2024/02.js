class HomeRenovation{

    constructor(budget){
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority){
        if(typeof description != 'string' || typeof cost != 'number' || typeof priority != 'number') return;

        if(cost > this.budget){
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({description, cost, priority});
        this.budget -= cost;

        //console.log(this.tasks);
        return `The task '${description}' has been successfully added to the renovation plan.`
    }

    markTaskAsCompleted(desc){
        if(typeof desc != 'string') return;

        for (const task of this.tasks) {
            
            if(task.description.includes(desc)){
               const indexRemove = this.tasks.indexOf(task);
                this.tasks.splice(indexRemove, 1);
                this.completedTasks.push(task);

                return `The task '${desc}' has been successfully completed.`;
            }else{
                continue;
            }
        }
        throw new Error(`Task '${desc}' not found in the renovation plan.`)
        
    }

    getPriorityTasksCount(minimalPriority){
        if(typeof minimalPriority != 'number') return;

        if(minimalPriority <= 0 ){
            return "The priority cannot be zero or negative.";
        }
        let tasksCount = 0;
        for (const task of this.tasks) {
            
            if(task.priority >= minimalPriority){
                tasksCount++;
            }
        }

        if(tasksCount > 0){
            return `You have ${tasksCount} tasks to prioritize.`;
        }

        return `No tasks found with priority ${minimalPriority} or higher.`;
        
    }

    renovationSummary(){
        if(this.completedTasks.length == 0){
            throw new Error("No tasks have been completed yet!");
        }

        let result = `Budget left $${this.budget}.`;
        result += `\nYou have completed ${this.completedTasks.length} tasks.`;
        result += `\nPending tasks in the renovation plan:`;

        for (const task of this.tasks) {
            result += `\n${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`;
        }
        
        return result;
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Paint doors", 500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.getPriorityTasksCount(1)); 
console.log(renovation.markTaskAsCompleted("Install new windows")); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());



