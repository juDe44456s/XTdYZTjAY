// 代码生成时间: 2025-09-22 09:14:59
 * This module provides a simple task scheduler that allows tasks to be executed at specified intervals.
 *
 * @author Your Name
 * @version 1.0
 */

(function($) {
    "use strict";

    // Scheduler class
    var Scheduler = function() {
        this.tasks = [];
    };

    // Add task to scheduler
    Scheduler.prototype.addTask = function(task) {
        if (!task.taskFunction || typeof task.taskFunction !== 'function') {
            throw new Error('Task must have a taskFunction property that is a function.');
        }
        if (!task.interval) {
            throw new Error('Task must have an interval property.');
        }
        this.tasks.push(task);
        this.startTask(task);
    };

    // Start a task
    Scheduler.prototype.startTask = function(task) {
        var self = this;
        self.stopTask(task); // Ensure the task is not already running
        setInterval(function() {
            task.taskFunction.call(task.context || null); // Execute the task function
        }, task.interval);
    };

    // Stop a task
    Scheduler.prototype.stopTask = function(task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === task) {
                clearInterval(this.tasks[i].timerId);
                this.tasks.splice(i, 1);
                return;
            }
        }
    };

    // Stop all tasks
    Scheduler.prototype.stopAllTasks = function() {
        for (var i = 0; i < this.tasks.length; i++) {
            clearInterval(this.tasks[i].timerId);
        }
        this.tasks = [];
    };

    // Expose the Scheduler class to the global scope
    window.Scheduler = Scheduler;

})(jQuery);

// Usage example
/*
$(document).ready(function() {
    var myScheduler = new Scheduler();

    // Define a task
    var task = {
        taskFunction: function() {
            console.log('Task executed at: ' + new Date().toLocaleTimeString());
        },
        interval: 2000 // 2 seconds
    };

    // Add the task to the scheduler
    myScheduler.addTask(task);
});
*/
