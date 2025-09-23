// 代码生成时间: 2025-09-23 08:20:40
$(document).ready(function() {

    /**
     * Generates a random number between the provided min and max values.
     *
     * @param {number} min - The minimum value of the random number.
     * @param {number} max - The maximum value of the random number.
     * @returns {number} A random number between min and max.
     */
    function generateRandomNumber(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new Error('Both min and max must be numbers.');
        }
        if (min > max) {
            throw new Error('Minimum value cannot be greater than maximum value.');
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Event handler for the generate button click event.
     *
     * @param {Event} event - The click event object.
     */
    $('#generateButton').click(function(event) {
        event.preventDefault();

        try {
            var min = parseInt($('#minValue').val(), 10);
            var max = parseInt($('#maxValue').val(), 10);
            var randomNumber = generateRandomNumber(min, max);
            $('#result').text('Random number: ' + randomNumber);
        } catch (error) {
            $('#result').text('Error: ' + error.message);
        }
    });

});