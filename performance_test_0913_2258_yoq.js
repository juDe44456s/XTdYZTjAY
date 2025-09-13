// 代码生成时间: 2025-09-13 22:58:52
$(document).ready(function() {

    // Function to start the performance test
    function startPerformanceTest() {
        try {
            // Define the URL to be tested
            const testUrl = 'https://example.com';

            // Start the timer before the request
            const startTime = performance.now();

            // Use jQuery's AJAX method to make a GET request to the test URL
            $.ajax({
                url: testUrl,
                method: 'GET',
                success: function(response) {
                    // Calculate the time taken to load the page
                    const endTime = performance.now();
                    const duration = endTime - startTime;

                    // Log the result to the console
                    console.log(`Page loaded in ${duration} milliseconds`);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Log any errors that occur during the request
                    console.error(`Error fetching ${testUrl}: ${errorThrown}`);
                }
            });
        } catch (error) {
            // Catch any unexpected errors and log them to the console
            console.error('An error occurred during performance testing:', error);
        }
    }

    // Call the function to start the performance test
    startPerformanceTest();

});