// 代码生成时间: 2025-09-10 12:14:57
$(document).ready(function() {
    
    // Function to handle file selection
    function handleFileSelect(evt) {
        // Retrieve the file from the input element
        var file = evt.target.files[0];
        if (!file) {
            alert('No file selected!');
            return;
        }
        
        // Check if the file is of type .zip
        if (file.type !== 'application/zip') {
            alert('Please select a .zip file.');
            return;
        }
        
        // Create a reader to read the file
        var reader = new FileReader();
        reader.onload = function(event) {
            try {
                // Decompress the file using JSZip
                JSZip.loadAsync(event.target.result).then(function(zip) {
                    // Read the content of the zip file
                    zip.forEach(function(relativePath, zipEntry) {
                        // Extract each file to the file system
                        zipEntry.async('blob').then(function(content) {
                            var url = URL.createObjectURL(content);
                            window.open(url);
                        });
                    });
                });
            } catch (error) {
                // Handle errors during decompression
                console.error('An error occurred during decompression:', error);
            }
        };
        reader.readAsArrayBuffer(file);
    }
    
    // Attach the file selection handler to the file input element
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
    
});

// Assuming the presence of a file input element with the id 'fileInput' in the HTML
// <input type='file' id='fileInput' />

// NOTE: This script requires the JSZip library to be included in the project, which can be done by including the following script tag in the HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>