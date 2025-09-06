// 代码生成时间: 2025-09-07 07:05:35
const mysql = require('mysql');

// Define the pool configuration
const poolConfig = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabase'
};

// Create a MySQL connection pool
const pool = mysql.createPool(poolConfig);

/**
 * Retrieves a connection from the pool
 * @returns {Promise} A promise that resolves to a MySQL connection object.
 */
function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(connection);
        });
    });
}

/**
 * Releases a connection back to the pool
 * @param {Object} connection - The MySQL connection object to release.
 */
function releaseConnection(connection) {
    connection.release();
}

/**
 * Executes a query using a connection from the pool
 * @param {string} query - The SQL query to execute.
 * @returns {Promise} A promise that resolves to the query results.
 */
function executeQuery(query) {
    return getConnection()
        .then(connection => {
            return new Promise((resolve, reject) => {
                connection.query(query, (err, results) => {
                    releaseConnection(connection);
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(results);
                });
            });
        });
}

/**
 * Example usage:
 * executeQuery('SELECT * FROM users').then(results => {
 *     console.log(results);
 * }).catch(error => {
 *     console.error('Query failed:', error);
 * });
 */

module.exports = {
    getConnection,
    releaseConnection,
    executeQuery
};