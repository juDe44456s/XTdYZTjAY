// 代码生成时间: 2025-08-27 04:28:46
$(document).ready(function() {
    // ShoppingCart constructor
    function ShoppingCart() {
        this.items = []; // Holds the items in the cart
    }

    // Adds an item to the cart
    ShoppingCart.prototype.addItem = function(item) {
        if (!item || typeof item !== 'object') {
            console.error('Invalid item'); // Error handling for invalid item
            return;
        }
        this.items.push(item); // Add item to the cart
        this.updateCartUI(); // Update the cart UI
    };

    // Removes an item from the cart
    ShoppingCart.prototype.removeItem = function(itemId) {
        this.items = this.items.filter(function(item) {
            return item.id !== itemId;
        });
        this.updateCartUI(); // Update the cart UI
    };

    // Updates the cart UI
    ShoppingCart.prototype.updateCartUI = function() {
        const cartContainer = $('#cartContainer');
        cartContainer.empty(); // Clear the cart container

        this.items.forEach(function(item) {
            cartContainer.append(`
                <div class='cart-item'>
                    <span>${item.name}</span>
                    <span>${item.quantity}</span>
                    <button onclick='cart.removeItem(${item.id})'>Remove</button>
                </div>
            `); // Append each item to the cart container
        });
    };

    // Initializes the shopping cart
    function initCart() {
        const cart = new ShoppingCart();
        window.cart = cart; // Expose the cart to the window for global access
    }

    // Initialize the cart when the document is ready
    initCart();
});