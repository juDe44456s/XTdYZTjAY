// 代码生成时间: 2025-08-20 22:30:43
$(document).ready(function() {

    /**
     * Function to check the network connection status
     * @returns {Promise<void>}
     */
    function checkNetworkConnection() {
        return new Promise((resolve, reject) => {
            // Try to fetch a resource to check for network connectivity
            fetch('https://www.google.com', { method: 'HEAD' }) // Use a simple HEAD request to check connectivity
                .then(response => {
                    // If the response is successful, resolve the promise
                    if (response.ok) {
                        resolve('Online');
                    } else {
                        reject('No network connection or the server is unreachable');
                    }
                }).catch(error => {
                    // If there's an error, reject the promise
                    reject('No network connection or an error occurred');
                });
        });
    }

    /**
     * Function to update the UI based on the network connection status
     * @param {string} status - The network connection status
     */
    function updateUI(status) {
        const connectionStatusElement = $('#connectionStatus');
        connectionStatusElement.text(status);
        connectionStatusElement.css('color', status === 'Online' ? 'green' : 'red');
    }

    /**
     * Main function to initiate the network connection check
     */
    function initiateConnectionCheck() {
        checkNetworkConnection()
            .then(status => {
                updateUI(status);
            }).catch(error => {
                updateUI(error);
            });
    }

    // Check the network connection status on page load
    initiateConnectionCheck();

    // Optional: You can also set up an interval to periodically check the network status
    setInterval(initiateConnectionCheck, 5000); // Check every 5 seconds
});