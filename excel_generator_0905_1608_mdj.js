// 代码生成时间: 2025-09-05 16:08:41
$(document).ready(function() {
  // Function to generate Excel table
  function generateExcelTable() {
    try {
      // Check if the necessary data is available
      if (!data || data.length === 0) {
        throw new Error('No data provided to generate the Excel table.');
      }

      // Clear any existing table
      $('#excelTable').empty();

      // Create the table header
      var table = $('<table>').addClass('excel-table');
      var thead = $('<thead>');
      var headerRow = $('<tr>');
      Object.keys(data[0]).forEach(function(key) {
        headerRow.append($('<th>').text(key));
      });
      thead.append(headerRow).appendTo(table);

      // Create the table body
      var tbody = $('<tbody>');
      data.forEach(function(row) {
        var tr = $('<tr>');
        Object.values(row).forEach(function(cell) {
          tr.append($('<td>').text(cell));
        });
        tbody.append(tr);
      });
      table.append(thead).append(tbody).appendTo('#excelTableContainer');

    } catch (error) {
      console.error('Error generating Excel table:', error.message);
      alert(error.message);
    }
  }

  // Example usage: Call generateExcelTable with sample data
  var data = [
    { "Name": "John", "Age": 30, "City": "New York" },
    { "Name": "Jane", "Age": 25, "City": "Los Angeles" },
    { "Name": "Bob", "Age": 40, "City": "Chicago" }
  ];
  generateExcelTable(data);

  // Listener for button click to generate table
  $('#generateButton').on('click', function() {
    // Retrieve data from user input or other sources and call generateExcelTable
    // For demonstration, we'll use the sample data again
    generateExcelTable(data);
  });
});