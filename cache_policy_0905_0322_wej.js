// 代码生成时间: 2025-09-05 03:22:09
 * Features:
 * - Set cache with key-value pairs
 * - Retrieve cache by key
 * - Clear cache by key or clear all cache
 * - Check cache existence by key
 *
 * Usage:
 * var cache = new CachePolicy();
 * cache.set('key', 'value');
 * var value = cache.get('key');
 * cache.clear('key');
 * cache.clearAll();
 * if (cache.has('key')) {
 *     console.log('Key exists in cache');
 * }
 */

(function($) {

    "use strict";

    // CachePolicy constructor
    function CachePolicy() {
        this.cacheStore = {};
    }

    // Define CachePolicy prototype
    CachePolicy.prototype = {
        // Set cache item
        set: function(key, value) {
            this.cacheStore[key] = value;
        },

        // Get cache item
        get: function(key) {
            return this.cacheStore[key] || null;
        },

        // Clear cache item by key
        clear: function(key) {
            if (this.cacheStore.hasOwnProperty(key)) {
                delete this.cacheStore[key];
            } else {
                console.error('Cache key not found:', key);
            }
        },

        // Clear all cache items
        clearAll: function() {
            this.cacheStore = {};
        },

        // Check if cache item exists by key
        has: function(key) {
            return this.cacheStore.hasOwnProperty(key);
        }
    };

    // Expose CachePolicy to global namespace
    window.CachePolicy = CachePolicy;

}(jQuery));