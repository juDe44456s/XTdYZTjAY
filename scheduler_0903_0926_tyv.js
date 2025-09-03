// 代码生成时间: 2025-09-03 09:26:55
 * This scheduler allows you to add tasks to be executed at specific intervals.
 *
 * @author Your Name
 * @version 1.0
 */

(function($, window, document) {
    "use strict";

    // Task constructor
    function Task(taskName, interval, callback) {
        this.taskName = taskName;
        this.interval = interval;
        this.callback = callback;
        this.timer = null;
    }

    // Task methods
    $.extend(Task.prototype, {
        /**
         * Start the task
         */
        start: function() {
            this.timer = setInterval(this.callback, this.interval);
        },

        /**
         * Stop the task
         */
        stop: function() {
            clearInterval(this.timer);
        },

        /**
         * Restart the task
         */
        restart: function() {
            this.stop();
            this.start();
        },

        /**
         * Check if the task is currently running
         *
         * @return {boolean}
         */
        isRunning: function() {
            return this.timer !== null;
        }
    });

    // Scheduler constructor
    function Scheduler() {
        this.tasks = [];
    }

    // Scheduler methods
    $.extend(Scheduler.prototype, {
        /**
         * Add a new task to the scheduler
         *
         * @param {string} taskName - The name of the task
         * @param {number} interval - The interval in milliseconds at which the task should run
         * @param {function} callback - The function to be executed at the interval
         * @return {Task}
         */
        addTask: function(taskName, interval, callback) {
            if (typeof callback !== 'function') {
                throw new Error('Callback must be a function');
            }
            var task = new Task(taskName, interval, callback);
            this.tasks.push(task);
            task.start();
            return task;
        },

        /**
         * Remove a task from the scheduler
         *
         * @param {string} taskName - The name of the task to remove
         *
         * @return {boolean} - Whether the task was found and removed
         */
        removeTask: function(taskName) {
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].taskName === taskName) {
                    this.tasks[i].stop();
                    this.tasks.splice(i, 1);
                    return true;
                }
            }
            return false;
        },

        /**
         * Restart all tasks in the scheduler
         */
        restartAll: function() {
            for (var i = 0; i < this.tasks.length; i++) {
                this.tasks[i].restart();
            }
        }
    });

    // Expose the Scheduler to the global scope
    window.Scheduler = Scheduler;

}(window.jQuery, window, document));