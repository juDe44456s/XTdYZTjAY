// 代码生成时间: 2025-09-06 15:06:39
 * Features:
 * - Retrieves CPU usage, memory usage, and network information.
 * - Displays system performance data in a user-friendly manner.
 *
 * This tool is designed to be easy to understand, maintain, and extend.
 */

$(document).ready(function() {

  // Function to fetch system performance data
  function fetchSystemPerformance() {
    try {
      // Simulate fetching system performance data using a fake API or local storage
      // For demonstration purposes, we will use static data
      const cpuUsage = 50; // CPU usage percentage
      const memoryUsage = 70; // Memory usage percentage
      const networkInfo = {
        sent: 1200, // Bytes sent
        received: 3000 // Bytes received
      };

      // Display the fetched data
      displayPerformanceData(cpuUsage, memoryUsage, networkInfo);
    } catch (error) {
      console.error('Error fetching system performance data:', error);
    }
  }

  // Function to display system performance data
  function displayPerformanceData(cpuUsage, memoryUsage, networkInfo) {
    $('#cpuUsage').text(`CPU Usage: ${cpuUsage}%`);
    $('#memoryUsage').text(`Memory Usage: ${memoryUsage}%`);
    $('#networkSent').text(`Bytes Sent: ${networkInfo.sent}`);
    $('#networkReceived').text(`Bytes Received: ${networkInfo.received}`);
  }

  // Function to initialize the performance monitor
  function initPerformanceMonitor() {
    try {
      // Clear any existing performance data
      $('#performanceData').empty();

      // Add performance data elements to the DOM
      $('#performanceData').append(`
        <div>CPU Usage: <span id='cpuUsage'></span></div>
        <div>Memory Usage: <span id='memoryUsage'></span></div>
        <div>Network Sent: <span id='networkSent'></span></div>
        <div>Network Received: <span id='networkReceived'></span></div>
      `);

      // Fetch and display system performance data
      fetchSystemPerformance();
    } catch (error) {
      console.error('Error initializing performance monitor:', error);
    }
  }

  // Call the init function to start monitoring system performance
  initPerformanceMonitor();

});