// 代码生成时间: 2025-09-20 08:01:30
$(document).ready(function() {

    // Function to process a single CSV file
    function processCsvFile(file) {
        try {
            // Read the file content
            const reader = new FileReader();
            reader.onload = function(event) {
                const csvData = event.target.result;

                // Parse the CSV data into an array of objects
                const rows = $.csv.toArrays(csvData);

                // Process the CSV data (example: count the number of rows)
                const rowCount = rows.length - 1; // Subtract 1 for the header row
                console.log(`Processed ${rowCount} rows in the CSV file`);
            };

            // Read the file as text (CSV format)
            reader.readAsText(file);

        } catch (error) {
            console.error(`Error processing CSV file: ${error.message}`);
        }
    }

    // Function to handle file selection and processing
    function handleFileSelect(event) {
        const files = event.target.files;
        if (files) {
            // Process each selected CSV file
            $.each(files, function(index, file) {
                if (file.type === 'text/csv') {
                    processCsvFile(file);
                } else {
                    console.warn(`Skipping non-CSV file: ${file.name}`);
                }
            });
        } else {
            console.warn('No files selected.');
        }
    }

    // Attach the file selection handler to the file input element
    $('#csvFileInput').on('change', handleFileSelect);

});