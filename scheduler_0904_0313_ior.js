// 代码生成时间: 2025-09-04 03:13:51
 * It allows you to schedule tasks to be executed at certain intervals.
 */

(function($) {
    
    "use strict";
    
    // Define the TaskScheduler class
    class TaskScheduler {
        
        /**
         * Initializes the TaskScheduler with an array of tasks.
         * @param {Object[]} tasks - An array of task objects with 'func' and 'interval' properties.
         */
        constructor(tasks) {
            this.tasks = tasks;
        }
        
        /**
         * Starts all the tasks in the scheduler.
         */
        start() {
            this.tasks.forEach(task => {
                try {
                    // Set up the interval for each task
                    const intervalId = setInterval(task.func, task.interval);
                    
                    // Store the intervalId to be able to clear it later if needed
                    this.intervalIds = this.intervalIds || {};
                    this.intervalIds[task.name] = intervalId;
                } catch (error) {
                    console.error(`Failed to start task ${task.name}: ${error}`);
                }
            });
        }
        
        /**
         * Stops all the tasks in the scheduler.
         */
        stopAll() {
            Object.keys(this.intervalIds).forEach(taskId => {
                clearInterval(this.intervalIds[taskId]);
            });
            this.intervalIds = {};
        }
        
        /**
         * Stops a specific task by its name.
         * @param {String} name - The name of the task to stop.
         */
        stopTask(name) {
            if (this.intervalIds[name]) {
                clearInterval(this.intervalIds[name]);
                delete this.intervalIds[name];
            } else {
                console.error(`Task ${name} not found`);
            }
        }
    }
    
    // Expose the TaskScheduler class to the global scope
    window.TaskScheduler = TaskScheduler;
    
}(jQuery));