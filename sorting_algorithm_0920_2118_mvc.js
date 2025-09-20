// 代码生成时间: 2025-09-20 21:18:28
(function($) {
    
    "use strict";
    
    /**
     * Sorts an array of numbers in ascending order.
     * @function sortNumbers
     * @param {Array} array - The array of numbers to be sorted.
     * @returns {Array} - The sorted array of numbers.
     */
    function sortNumbers(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input must be an array.");
        }

        if (array.some(item => typeof item !== 'number')) {
            throw new Error("All items in the array must be numbers.");
        }

        // Use the built-in Array.sort method to sort numbers in ascending order.
        return array.sort((a, b) => a - b);
    }

    // Expose the sortNumbers function to the global scope.
    window.sortNumbers = sortNumbers;
    
    
    $(document).ready(function() {
        
        /**
         * Example usage of the sortNumbers function.
         * This code will sort a sample array of numbers and display the result in the console.
         */
        try {
            var sampleArray = [5, 3, 8, 1, 2];
            var sortedArray = sortNumbers(sampleArray);
            console.log("Sorted array: ", sortedArray);
        } catch (error) {
            console.error("Error sorting array: ", error.message);
        }
    });

}(jQuery));