// 代码生成时间: 2025-09-16 07:05:21
(function($) {

    // Define the APIResponseFormatter class
    const APIResponseFormatter = function() {};

    // Method to format the API response
    APIResponseFormatter.prototype.format = function(response) {
        // Check if response is valid
        if (!response || typeof response !== 'object') {
            throw new Error('Invalid response object provided.');
        }

        // Define the formatted response structure
        const formattedResponse = {
            success: false,
            data: null,
            message: '',
            errors: []
        };

        // Check if response contains success status
        if (response.success !== undefined) {
            formattedResponse.success = response.success;
        }

        // Assign data if available
        if (response.data !== undefined) {
            formattedResponse.data = response.data;
        }

        // Assign message if available
        if (response.message !== undefined) {
            formattedResponse.message = response.message;
        } else if (response.error !== undefined) {
            formattedResponse.message = response.error;
        }

        // Assign errors if available
        if (response.errors && Array.isArray(response.errors)) {
            formattedResponse.errors = response.errors;
        } else if (response.error && typeof response.error === 'string') {
            formattedResponse.errors.push(response.error);
        }

        return formattedResponse;
    };

    // Expose the APIResponseFormatter class globally
    window.APIResponseFormatter = APIResponseFormatter;

    // Example usage:
    // const formatter = new APIResponseFormatter();
    // const formattedResponse = formatter.format(apiResponse);
    // console.log(formattedResponse);

}(jQuery));