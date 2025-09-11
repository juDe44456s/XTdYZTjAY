// 代码生成时间: 2025-09-11 23:49:09
 * This tool allows users to calculate hash values for strings using various algorithms.
 * Dependencies: jQuery
 *
 * @author Your Name
 * @version 1.0
 * @date YYYY-MM-DD
 */

(function($, window, document) {

    // Define a mapping of hash algorithms to their corresponding functions
    const hashAlgorithms = {
        'md5': function(data) { return CryptoJS.MD5(data).toString(); },
        'sha1': function(data) { return CryptoJS.SHA1(data).toString(); },
        'sha256': function(data) { return CryptoJS.SHA256(data).toString(); },
        'sha512': function(data) { return CryptoJS.SHA512(data).toString(); }
    };

    // Function to calculate the hash of the input string
    function calculateHash(input, algorithm) {
        // Check if the algorithm is supported
        if (!hashAlgorithms[algorithm]) {
            throw new Error('Unsupported hash algorithm.');
        }

        // Calculate the hash using the selected algorithm
        return hashAlgorithms[algorithm](input);
    }

    // Function to handle the hash calculation and update the UI
    function updateHashDisplay(inputString, selectedAlgorithm) {
        try {
            // Calculate the hash
            const hash = calculateHash(inputString, selectedAlgorithm);

            // Display the result in the UI
            $('#hashResult').text(hash);
        } catch (error) {
            // Handle any errors that occur during hash calculation
            alert(error.message);
        }
    }

    // Event listener for the calculate button click
    $('#calculateBtn').on('click', function() {
        // Get the input string and selected algorithm from the UI
        const inputString = $('#inputString').val();
        const selectedAlgorithm = $('#algorithmSelect').val();

        // Update the hash display with the calculated hash
        updateHashDisplay(inputString, selectedAlgorithm);
    });

    // Event listener for the input field to update hash in real-time (optional)
    $('#inputString').on('input', function() {
        const inputString = $(this).val();
        const selectedAlgorithm = $('#algorithmSelect').val();
        updateHashDisplay(inputString, selectedAlgorithm);
    });

}(window.jQuery, window, document));
