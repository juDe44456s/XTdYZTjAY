// 代码生成时间: 2025-09-18 09:10:10
$(document).ready(function() {

    // Function to rename files
    function renameFiles(files, pattern) {
        try {
            if (!files.length) {
                throw new Error('No files selected.');
            }

            for (let i = 0; i < files.length; i++) {
                const oldName = files[i].name;
                const newName = pattern.replace('%d', i);
                console.log(`Renaming ${oldName} to ${newName}`);
                // File renaming logic should be implemented here
                // For demonstration, we're just logging the action
            }
            alert('Files renamed successfully.');
        } catch (error) {
            console.error(error.message);
            alert('Error: ' + error.message);
        }
    }

    // Handle file selection
    $('#fileInput').on('change', function(e) {
        const files = e.target.files;
        if (!files) {
            return;
        }

        // Prompt user for the naming pattern
        const pattern = prompt('Enter the naming pattern (e.g., file%d.txt):', 'file%d.txt');
        if (!pattern) {
            alert('No pattern provided. Operation cancelled.');
            return;
        }

        renameFiles(files, pattern);
    });

    // Handle pattern selection
    $('#patternInput').on('input', function() {
        const pattern = $(this).val();
        // Store the pattern for later use
        localStorage.setItem('lastPattern', pattern);
    });

    // Load the last used pattern
    const lastPattern = localStorage.getItem('lastPattern');
    if (lastPattern) {
        $('#patternInput').val(lastPattern);
    }

});