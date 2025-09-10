// 代码生成时间: 2025-09-11 06:53:40
// Interactive Chart Generator using JS and JQUERY

// Function to initialize the chart generator
function initChartGenerator() {
    // Check if the JQUERY library is loaded
    if (typeof $ === 'undefined') {
        console.error('JQuery is not loaded. Please include JQuery before running this script.');
        return;
    }

    // Check if Chart.js library is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Please include Chart.js before running this script.');
        return;
    }

    // Initialize the chart on the page with the ID 'chart-container'
    initChart('#chart-container');
}

// Function to initialize a chart
function initChart(containerId) {
    // Check if the container exists
    if (!$(containerId).length) {
        console.error('Container not found:', containerId);
        return;
    }

    // Define the chart data
    var chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Demo Dataset',
                data: [0, 10, 5, 2, 20, 30, 45],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    // Define chart options
    var chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Initialize the chart with the data and options
    var ctx = $(containerId).get(0).getContext('2d');
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}

// Function to update chart data dynamically
function updateChartData(newData) {
    if (!window.myChart) {
        console.error('Chart not initialized. Please initialize the chart before updating data.');
        return;
    }

    // Update the chart data
    window.myChart.data.datasets[0].data = newData;
    window.myChart.update();
}

// Function to handle user input for updating chart data
function handleUserInput() {
    var userInput = $('#user-input').val();
    try {
        // Parse the user input as JSON
        var newData = JSON.parse(userInput);
        // Update the chart data if the input is valid
        updateChartData(newData);
    } catch (error) {
        console.error('Invalid JSON input:', error);
    }
}

// Attach event listeners to UI elements
$(document).ready(function() {
    // Initialize the chart generator on document ready
    initChartGenerator();

    // Attach event listener to the user input field for updating chart data
    $('#update-button').on('click', function() {
        handleUserInput();
    });
});
</script>