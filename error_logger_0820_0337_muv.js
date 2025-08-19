// 代码生成时间: 2025-08-20 03:37:57
(function($) {
  // ErrorLogger constructor
  function ErrorLogger(options) {
    this.options = $.extend({}, {
      // Default options
      logToConsole: true,
      logToFile: false,
      filePath: '/path/to/error.log'
    }, options);
  }

  // Log error message to the console
  ErrorLogger.prototype.logToConsole = function(message) {
    if (this.options.logToConsole) {
      console.error(message);
    }
  };

  // Log error message to a file (simulated)
  ErrorLogger.prototype.logToFile = function(message) {
    if (this.options.logToFile) {
      // Simulated file logging
      // In a real-world scenario, you would use AJAX or a server-side script to handle file logging.
      console.log('File logging is simulated. Message:', message);
    }
  };

  // Public method to log errors
  ErrorLogger.prototype.logError = function(error) {
    try {
      // Log the error message to console and file if configured to do so.
      var errorMessage = error.message ? error.message : 'Unknown error';
      this.logToConsole(errorMessage);
      this.logToFile(errorMessage);
    } catch (e) {
      // Handle any errors that occur during logging
      console.error('Error occurred while logging:', e);
    }
  };

  // Make ErrorLogger publicly available
  $.errorLogger = function(options) {
    return new ErrorLogger(options);
  };
})(jQuery);

// Usage:
// var logger = $.errorLogger({
//   logToConsole: true,
//   logToFile: true,
//   filePath: '/custom/path/to/error.log'
// });
// logger.logError(new Error('Something went wrong'));