// 代码生成时间: 2025-08-07 14:48:49
(function($, window) {

  // Function to resize an image using the canvas
  function resizeImage(image, maxWidth, maxHeight) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    var width = image.width;
    var height = image.height;

    // Maintain aspect ratio
    var ratio = Math.min(maxWidth / width, maxHeight / height);
    var newWidth = width * ratio;
    var newHeight = height * ratio;

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    return canvas.toDataURL('image/jpeg');
  }

  // Function to process all images within the container with the specified class
  function resizeImagesInContainer(containerClass, maxWidth, maxHeight) {
    var images = document.querySelectorAll('.' + containerClass + ' img');

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      try {
        var resizedImageUrl = resizeImage(image, maxWidth, maxHeight);
        image.src = resizedImageUrl;
      } catch (error) {
        console.error('Error resizing image:', error);
      }
    }
  }

  // Expose the function to jQuery plugin
  $.fn.imageResizer = function(options) {
    // Default options
    var settings = $.extend({
      maxWidth: 200,
      maxHeight: 200
    }, options);

    // Process each element with the plugin called on it
    this.each(function() {
      var container = $(this);
      resizeImagesInContainer(container.attr('class'), settings.maxWidth, settings.maxHeight);
    });
  };

  // Expose the function to global scope
  window.resizeImagesInContainer = resizeImagesInContainer;

})(jQuery, window);

// Example usage:
// $('#myImageContainer').imageResizer({maxWidth: 100, maxHeight: 100});