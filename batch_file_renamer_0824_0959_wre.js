// 代码生成时间: 2025-08-24 09:59:16
$(document).ready(function() {

  /**
   * Function to rename files
   *
   * @param {Array} files - Array of file names to rename
   * @param {string} newBaseName - New base name for the files
   * @param {Function} callback - Function to call after renaming
   */
  function renameFiles(files, newBaseName, callback) {
    let renamedFilesCount = 0;
    files.forEach((file, index) => {
      // Construct the new file name
      let newFileName = `${newBaseName}_${index + 1}.${file.split('.').pop()}`;

      // Simulate file renaming (in actual use, this would be replaced with file system operations)
      // For example, using the HTML5 File API or Node.js fs module
      console.log(`Renaming '${file}' to '${newFileName}'`);

      // Simulate an asynchronous operation
      setTimeout(() => {
        // Simulate error for demo purposes, you can remove or modify this
        if (index % 2 === 0) {
          console.error(`Error renaming file: ${file}`);
          if (typeof callback === 'function') {
            callback(false);
          }
          return;
        }

        renamedFilesCount++;
        if (renamedFilesCount === files.length) {
          console.log('All files have been renamed successfully.');
          if (typeof callback === 'function') {
            callback(true);
          }
        }
      }, 100);
    });
  }

  /**
   * Event handler for the rename button click
   */
  $('#renameButton').click(function() {
    try {
      let files = $('#fileList').val().split(',');
      let newBaseName = $('#newBaseName').val().trim();

      // Validate input
      if (!files.length || !newBaseName) {
        throw new Error('Please provide the list of files and a new base name.');
      }

      // Call the rename function
      renameFiles(files, newBaseName, function(success) {
        if (success) {
          $('#status').text('Renaming completed successfully.');
        } else {
          $('#status').text('An error occurred during renaming.');
        }
      });
    } catch (error) {
      console.error(error.message);
      $('#status').text(error.message);
    }
  });
});