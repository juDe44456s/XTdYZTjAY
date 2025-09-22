// 代码生成时间: 2025-09-22 23:08:10
(function($) {

  /**
   * MathToolbox class contains all the mathematical operations.
   *
   * @class MathToolbox
   */
  class MathToolbox {
    constructor() {
      // Initialization if needed
    }

    /**
     * Adds two numbers.
     *
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} The sum of a and b.
     */
    add(a, b) {
      return a + b;
    }

    /**
     * Subtracts second number from the first.
     *
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} The difference of a and b.
     */
    subtract(a, b) {
      return a - b;
    }

    /**
     * Multiplies two numbers.
     *
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} The product of a and b.
     */
    multiply(a, b) {
      return a * b;
    }

    /**
     * Divides first number by the second.
     *
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} The quotient of a divided by b.
     * @throws Will throw an error if b is zero.
     */
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return a / b;
    }
  }

  /**
   * Initializes the MathToolbox and attaches it to the window object.
   */
  $(document).ready(function() {
    window.MathToolbox = new MathToolbox();
  });

})( jQuery );