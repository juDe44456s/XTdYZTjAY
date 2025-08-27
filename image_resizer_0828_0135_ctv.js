// 代码生成时间: 2025-08-28 01:35:19
 * It handles errors and is designed for maintainability and scalability.
 *
 * @author Your Name
 * @version 1.0
 */

(function($, window, document) {

    // Function to resize an image
    function resizeImage(image, targetWidth, targetHeight) {
        const img = new Image();
        img.onload = function() {
            let width = img.width, height = img.height, scale = width > height ? targetWidth / width : targetHeight / height;
            let targetWidth = width * scale, targetHeight = height * scale;
            let canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
            let resizedImage = canvas.toDataURL('image/jpeg');
            // Replace the source of the original image with the resized image
            image.src = resizedImage;
        };
        img.onerror = function() {
            console.error('Error loading image:', image.src);
        };
        img.src = image.src; // Use the same source to avoid caching issues
    }

    // Function to batch resize images within a container
    function batchResizeImages(containerId, targetWidth, targetHeight) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }
        const images = container.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            resizeImage(images[i], targetWidth, targetHeight);
        }
    }

    // Expose the function to jQuery
    $.fn.batchResizeImages = function(targetWidth, targetHeight) {
        this.each(function() {
            batchResizeImages(this.id, targetWidth, targetHeight);
        });
    };

    // Usage: $('#container').batchResizeImages(800, 600);

})(jQuery, window, document);