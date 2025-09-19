// 代码生成时间: 2025-09-19 14:08:39
 * It allows users to input a string and calculates its hash value.
 *
 * @author Your Name
 * @version 1.0
 * @date YYYY-MM-DD
 */

(function($) {

    // Function to calculate hash value
    function calculateHash(value) {
        try {
            // Using CryptoJS library for hash calculation
            const hash = CryptoJS.SHA256(value);
            return hash.toString();
        } catch (error) {
            console.error('Error calculating hash:', error);
            return null;
        }
    }

    // Function to handle hash calculation on button click
    function onHashButtonClick() {
        const input = $('#inputString').val();

        if (!input) {
            alert('Please enter a string to calculate its hash value.');
            return;
        }

        const hashValue = calculateHash(input);

        if (hashValue) {
            $('#result').text(hashValue);
        } else {
            $('#result').text('Failed to calculate hash value.');
        }
    }

    // Document ready function
    $(document).ready(function() {
        // Event listener for button click to calculate hash
        $('#calculateHashButton').on('click', onHashButtonClick);
    });

})(jQuery);