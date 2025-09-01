// 代码生成时间: 2025-09-02 06:45:31
 * Features:
 * - Add items to the cart.
 * - Remove items from the cart.
 * - Update item quantities in the cart.
 * - Display cart items.
 * - Calculate total price of items in the cart.
 *
 * @author Your Name
 * @version 1.0
 */

$(document).ready(function() {

    // Shopping cart items
    var cart = [];

    // Function to add an item to the cart
    function addItemToCart(item) {
        if (item && item.id && item.price) {
            // Check if the item is already in the cart
            var existingItem = cart.find(function(cartItem) {
                return cartItem.id === item.id;
            });
            if (existingItem) {
                // If the item exists, increment its quantity
                existingItem.quantity += 1;
            } else {
                // If the item does not exist, add it to the cart with quantity 1
                cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1
                });
            }
        } else {
            // Handle invalid item
            console.error('Invalid item');
        }
    }

    // Function to remove an item from the cart
    function removeItemFromCart(itemId) {
        cart = cart.filter(function(item) {
            return item.id !== itemId;
        });
    }

    // Function to update item quantity in the cart
    function updateItemQuantity(itemId, quantity) {
        var item = cart.find(function(cartItem) {
            return cartItem.id === itemId;
        });
        if (item) {
            if (quantity > 0) {
                item.quantity = quantity;
            } else {
                // If quantity is 0 or negative, remove the item from the cart
                removeItemFromCart(itemId);
            }
        } else {
            // Handle item not found in the cart
            console.error('Item not found in the cart');
        }
    }

    // Function to display cart items
    function displayCart() {
        var cartContent = '';
        cart.forEach(function(item) {
            cartContent += '<tr><td>' + item.name + '</td><td>$' + item.price + '</td><td><input type="number" value="' + item.quantity + '" onchange="updateItemQuantity(' + item.id + ', this.value)"></td></tr>';
        });
        $('#cartTableBody').html(cartContent);
        calculateTotal();
    }

    // Function to calculate total price of items in the cart
    function calculateTotal() {
        var total = cart.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0);
        $('#totalPrice').text('$' + total);
    }

    // Example usage: Add items to the cart
    var item1 = { id: 1, name: 'Item 1', price: 9.99 };
    var item2 = { id: 2, name: 'Item 2', price: 19.99 };
    addItemToCart(item1);
    addItemToCart(item2);

    // Function to update item quantity when input changes
    function updateItemQuantity(itemId, quantity) {
        updateItemQuantity(itemId, parseInt(quantity));
        displayCart();
    }

    // Attach event listener to add item button
    $('#addItemButton').click(function() {
        var itemId = $('#itemId').val();
        var item = {
            id: parseInt(itemId),
            name: $('#itemName').val(),
            price: parseFloat($('#itemPrice').val())
        };
        addItemToCart(item);
        displayCart();
    });

    // Attach event listener to remove item button
    $('#removeItemButton').click(function() {
        var itemId = $('#itemId').val();
        removeItemFromCart(parseInt(itemId));
        displayCart();
    });

    // Attach event listener to update item quantity button
    $('#updateItemQuantityButton').click(function() {
        var itemId = $('#itemId').val();
        var quantity = parseInt($('#itemQuantity').val());
        updateItemQuantity(parseInt(itemId), quantity);
        displayCart();
    });

    // Display the cart initially
    displayCart();
});