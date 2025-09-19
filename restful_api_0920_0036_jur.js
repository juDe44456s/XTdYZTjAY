// 代码生成时间: 2025-09-20 00:36:09
 * RESTful API Interface using jQuery
 *
 * This script provides a simple RESTful API interface using jQuery.
 * It includes methods to perform GET, POST, PUT, and DELETE requests.
 * Error handling and documentation are included for maintainability and scalability.
 * 
 * @author Your Name
 * @version 1.0
 */

// Define API endpoint URL
const API_ENDPOINT = 'https://example.com/api';

// Perform a GET request
function get(apiUrl, callback) {
    jQuery.ajax({
        url: apiUrl,
        type: 'GET',
        success: function(data) {
            callback(null, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            callback({ status: textStatus, error: errorThrown });
        }
    });
}

// Perform a POST request
function post(apiUrl, data, callback) {
    jQuery.ajax({
        url: apiUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data) {
            callback(null, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            callback({ status: textStatus, error: errorThrown });
        }
    });
}

// Perform a PUT request
function put(apiUrl, data, callback) {
    jQuery.ajax({
        url: apiUrl,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data) {
            callback(null, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            callback({ status: textStatus, error: errorThrown });
        }
    });
}

// Perform a DELETE request
function del(apiUrl, callback) {
    jQuery.ajax({
        url: apiUrl,
        type: 'DELETE',
        success: function(data) {
            callback(null, data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            callback({ status: textStatus, error: errorThrown });
        }
    });
}

// Example usage
jQuery(document).ready(function() {
    // Get resource
    get(API_ENDPOINT + '/resource', function(err, data) {
        if (err) {
            console.error('Error fetching resource:', err);
        } else {
            console.log('Resource data:', data);
        }
    });

    // Post resource
    post(API_ENDPOINT + '/resource', { name: 'New Resource' }, function(err, data) {
        if (err) {
            console.error('Error posting resource:', err);
        } else {
            console.log('Resource created:', data);
        }
    });

    // Put resource
    put(API_ENDPOINT + '/resource/1', { name: 'Updated Resource' }, function(err, data) {
        if (err) {
            console.error('Error updating resource:', err);
        } else {
            console.log('Resource updated:', data);
        }
    });

    // Delete resource
    del(API_ENDPOINT + '/resource/1', function(err, data) {
        if (err) {
            console.error('Error deleting resource:', err);
        } else {
            console.log('Resource deleted:', data);
        }
    });
});