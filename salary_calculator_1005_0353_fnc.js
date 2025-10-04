// 代码生成时间: 2025-10-05 03:53:19
 * It uses jQuery to interact with the HTML elements and calculate the net income.
 *
 * @author Your Name
 * @version 1.0
 */

$(document).ready(function() {

    // Function to calculate net income
    function calculateNetIncome(grossIncome, deductions) {
        if (isNaN(grossIncome) || isNaN(deductions)) {
            return 'Invalid input!';
        }

        let netIncome = grossIncome - deductions;
        return netIncome;
    }

    // Event handler for the calculate button
    $('#calculateButton').click(function() {
        try {
            // Get user input
            let grossIncome = parseFloat($('#grossIncome').val());
            let deductions = parseFloat($('#deductions').val());

            // Calculate net income
            let netIncome = calculateNetIncome(grossIncome, deductions);

            // Display the result
            if (typeof netIncome === 'number') {
                $('#netIncome').text(netIncome.toFixed(2));
            } else {
                $('#netIncome').text(netIncome);
            }
        } catch (error) {
            // Handle any exceptions
            $('#netIncome').text('Error: ' + error.message);
        }
    });

    // Event handler for the clear button
    $('#clearButton').click(function() {
        // Clear input fields and result
        $('#grossIncome').val('');
        $('#deductions').val('');
        $('#netIncome').text('');
    });

});