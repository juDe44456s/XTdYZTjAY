// 代码生成时间: 2025-10-13 20:45:09
// Data Compression Utility using JS and JQUERY

/**
 * @fileoverview
 * A utility that provides data compression and decompression functionality.
 *
 * @author Your Name
 * @version 1.0
 */

(function($) {

  "use strict";

  /**
   * A utility class for data compression and decompression.
   *
   * @class DataCompressor
   */
  var DataCompressor = {

    /**
     * Compresses the given data using gzip compression algorithm.
     *
     * @param {string} data - The data to be compressed.
     * @returns {string} - The compressed data in base64 format.
     */
    compress: function(data) {
      try {
        if (!data) {
          throw new Error('No data provided for compression.');
        }

        // Using pako library for gzip compression
        var pako = window.pako;
        if (!pako) {
          throw new Error('Pako library not found. Please include it before using compression functionality.');
        }

        var compressed = pako.gzip(data);
        return btoa(String.fromCharCode.apply(null, new Uint8Array(compressed)));

      } catch (error) {
        console.error('Compression error:', error.message);
        return null;
      }
    },

    /**
     * Decompresses the given base64 encoded data using gzip decompression algorithm.
     *
     * @param {string} compressedData - The compressed data in base64 format.
     * @returns {string} - The decompressed data.
     */
    decompress: function(compressedData) {
      try {
        if (!compressedData) {
          throw new Error('No compressed data provided for decompression.');
        }

        // Using pako library for gzip decompression
        var pako = window.pako;
        if (!pako) {
          throw new Error('Pako library not found. Please include it before using decompression functionality.');
        }

        var binaryString = atob(compressedData);
        var byteArray = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
          byteArray[i] = binaryString.charCodeAt(i);
        }

        var decompressed = pako.ungzip(byteArray);
        return new TextDecoder('utf-8').decode(decompressed);

      } catch (error) {
        console.error('Decompression error:', error.message);
        return null;
      }
    }

  };

  // Expose the DataCompressor to the global scope
  window.DataCompressor = DataCompressor;

}(jQuery));