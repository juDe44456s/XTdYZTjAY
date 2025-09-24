// 代码生成时间: 2025-09-24 14:50:32
(function($) {

    "use strict";

    // Define a function to sanitize input data to prevent XSS attacks
    function sanitizeInput(input) {
        try {
            // Remove all script tags to prevent script execution
            var cleanInput = input.replace(/<script\b[^<]*(?:(?!</script>)<[^<]*)*</script>/gi, "");
            // Escape HTML entities to prevent HTML injection
            cleanInput = $('<div/>').text(cleanInput).html();
            return cleanInput;
        } catch (error) {
            console.error('Error sanitizing input:', error);
            return null;
        }
    }

    // Public API
    var api = {
        // Function to sanitize and set innerHTML of an element
        setSafeInnerHTML: function(elementSelector, content) {
            try {
                var sanitizedContent = sanitizeInput(content);
                if (sanitizedContent) {
                    $(elementSelector).html(sanitizedContent);
                } else {
                    console.warn('Sanitization failed, not updating element.');
                }
            } catch (error) {
                console.error('Error setting safe innerHTML:', error);
            }
        }
    };

    // Expose the API to the global scope
    window.xssProtection = api;

})(jQuery);