// 代码生成时间: 2025-09-01 10:54:32
(function($) {
    "use strict";

    // Define the API Response Formatter class
    class ApiResponseFormatter {
        constructor() {
            this.defaultFormat = {
                success: false,
                message: "",
                data: null
            };
        }

        // Format the API response
        formatResponse(data, success, message) {
            if (typeof data !== 'object' || data === null) {
                throw new Error('Data must be a non-null object');
            }
            if (typeof success !== 'boolean') {
                throw new Error('Success must be a boolean value');
            }
            if (typeof message !== 'string') {
                throw new Error('Message must be a string');
            }

            return $.extend({}, this.defaultFormat, {
                success: success,
                message: message,
                data: data
            });
        }
    }

    // Instantiate the formatter and expose it to the global scope
    window.apiResponseFormatter = new ApiResponseFormatter();

    // Example usage:
    // window.apiResponseFormatter.formatResponse(someData, true, 'Success!');

}(jQuery));
