// 代码生成时间: 2025-08-18 17:08:06
(function($, window, document) {
    
    "use strict";
    
    // Define the ImageResizer class
    var ImageResizer = {
        
        // Function to resize images
        resizeImages: function(options) {
            // Validate options
            if (!options || !options.images || !options.targetWidth || !options.targetHeight) {
                console.error("Invalid options provided for ImageResizer");
                return;
            }
            
            // Iterate over each image and resize it
            $(options.images).each(function() {
                var img = $(this);
                var imgUrl = img.attr("src"); // Get the original image source
                
                // Create a temporary image to determine the aspect ratio
                var tempImg = new Image();
                tempImg.onload = function() {
                    // Calculate the resized dimensions while maintaining the aspect ratio
                    var aspectRatio = tempImg.width / tempImg.height;
                    var targetWidth = options.targetWidth;
                    var targetHeight = options.targetHeight;
                    
                    if (tempImg.width > tempImg.height) {
                        if (tempImg.width > targetWidth) {
                            targetHeight = Math.round(targetWidth / aspectRatio);
                        } else {
                            targetWidth = tempImg.width;
                            targetHeight = tempImg.height;
                        }
                    } else {
                        if (tempImg.height > targetHeight) {
                            targetWidth = Math.round(targetHeight * aspectRatio);
                        } else {
                            targetWidth = tempImg.width;
                            targetHeight = tempImg.height;
                        }
                    }
                    
                    // Resize the image and change the source
                    var resizedImg = ImageResizer.resizeImage(imgUrl, targetWidth, targetHeight);
                    img.attr("src", resizedImg.src);
                };
                tempImg.src = imgUrl;
            });
        },
        
        // Function to resize an image
        resizeImage: function(imgUrl, targetWidth, targetHeight) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            
            var img = new Image();
            img.onload = function() {
                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
                
                // Return the resized image as a Blob
                canvas.toBlob(function(blob) {
                    var url = URL.createObjectURL(blob);
                    return {
                        src: url,
                        blob: blob
                    };
                }, "image/jpeg");
            };
            img.src = imgUrl;
            return {
                src: "", // Placeholder until the image is loaded and resized
                blob: null
            };
        }
    };
    
    // Expose the ImageResizer to the global scope
    window.ImageResizer = ImageResizer;
    
}(window.jQuery, window, document));
