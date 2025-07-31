// 代码生成时间: 2025-08-01 01:10:03
 * It includes generating random numbers, strings, and dates.
 *
 * @author Your Name
 * @version 1.0
 */

(function($) {

    "use strict";

    // Function to generate a random number within a given range
    function generateRandomNumber(min, max) {
        if (min > max) {
            throw new Error("Minimum value cannot be greater than maximum value.");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a random string of a given length
    function generateRandomString(length) {
        if (length <= 0) {
            throw new Error("Length must be a positive number.");
        }
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Function to generate a random date within a given range
    function generateRandomDate(start, end) {
        if (!(start instanceof Date) || !(end instanceof Date)) {
            throw new Error("Start and end must be valid Date objects.");
        }
        if (start > end) {
            throw new Error("Start date cannot be greater than end date.");
        }
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return new Date(date.setHours(0, 0, 0, 0)); // Resets the time to midnight
    }

    // Public API for generating test data
    const TestDataGenerator = {
        generateRandomNumber: generateRandomNumber,
        generateRandomString: generateRandomString,
        generateRandomDate: generateRandomDate
    };

    // Expose the API to the global scope
    window.TestDataGenerator = TestDataGenerator;

})(jQuery);
