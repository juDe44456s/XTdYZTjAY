// 代码生成时间: 2025-10-02 22:57:50
$(document).ready(function() {

    // Define the HR Management namespace
    var HRM = {
        // API endpoint for HR operations
        apiEndpoint: '/hr-api',

        // Function to handle load of employee data
        loadEmployeeData: function() {
            try {
                $.ajax({
                    url: HRM.apiEndpoint + '/employees',
                    method: 'GET',
                    success: function(data) {
                        HRM.displayEmployeeData(data);
                    },
                    error: function(error) {
                        console.error('Error fetching employee data:', error);
                        alert('Failed to load employee data. Please check your internet connection.');
                    }
                });
            } catch (e) {
                console.error('Exception in loadEmployeeData:', e);
            }
        },

        // Function to display employee data on the page
        displayEmployeeData: function(data) {
            // Assuming there's an element with id 'employee-list' on the page
            var employeeList = $('#employee-list');
            employeeList.empty(); // Clear existing employee list
            for (var i = 0; i < data.length; i++) {
                employeeList.append(
                    $('<li>').text(data[i].name + ' - ' + data[i].position)
                );
            }
        },

        // Function to handle the addition of a new employee
        addEmployee: function() {
            var employeeName = $('#employeeName').val();
            var employeePosition = $('#employeePosition').val();
            
            if (!employeeName || !employeePosition) {
                alert('Please fill in all fields.');
                return;
            }
            
            try {
                $.ajax({
                    url: HRM.apiEndpoint + '/employees',
                    method: 'POST',
                    data: JSON.stringify({ name: employeeName, position: employeePosition }),
                    contentType: 'application/json',
                    success: function() {
                        HRM.loadEmployeeData(); // Refresh employee list after adding
                        alert('Employee added successfully.');
                    },
                    error: function(error) {
                        console.error('Error adding employee:', error);
                        alert('Failed to add employee. Please try again.');
                    }
                });
            } catch (e) {
                console.error('Exception in addEmployee:', e);
            }
        }
    };

    // Bind the loadEmployeeData function to the window load event
    HRM.loadEmployeeData();

    // Bind the addEmployee function to the form submit event
    // Assuming there's a form with id 'addEmployeeForm'
    $('#addEmployeeForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        HRM.addEmployee();
    });
});