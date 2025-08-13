// 代码生成时间: 2025-08-13 10:19:46
 * Features:
 * - Add, Update, Delete, and List inventory items
 * - Error handling for user input and operations
 * - Comments and documentation for clarity and maintainability
 *
 * @author Your Name
 * @version 1.0
 */

// Define the Inventory namespace to avoid naming conflicts
var Inventory = {
    // Contains the inventory items
    items: [],

    // Initialize the inventory with sample data (for demonstration purposes)
    init: function() {
        this.items.push({ id: 1, name: 'Item 1', quantity: 10 });
        this.items.push({ id: 2, name: 'Item 2', quantity: 20 });
        this.items.push({ id: 3, name: 'Item 3', quantity: 30 });
    },

    // Add a new item to the inventory
    addItem: function(item) {
        if (!item.name || !item.quantity) {
            // Handle error: item name and quantity cannot be empty
            console.error('Error: Item name and quantity are required.');
            return;
        }
        this.items.push(item);
        Inventory.updateDisplay();
    },

    // Update an existing item in the inventory
    updateItem: function(id, item) {
        const index = Inventory.getItemIndexById(id);
        if (index === -1) {
            // Handle error: item not found
            console.error('Error: Item not found.');
            return;
        }
        this.items[index] = item;
        Inventory.updateDisplay();
    },

    // Delete an item from the inventory
    deleteItem: function(id) {
        const index = Inventory.getItemIndexById(id);
        if (index === -1) {
            // Handle error: item not found
            console.error('Error: Item not found.');
            return;
        }
        this.items.splice(index, 1);
        Inventory.updateDisplay();
    },

    // Get item index by ID
    getItemIndexById: function(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return i;
            }
        }
        return -1;
    },

    // Update the inventory display
    updateDisplay: function() {
        // Clear the current inventory display
        $('#inventory-list').empty();

        // Display each item in the inventory
        this.items.forEach(function(item) {
            $('#inventory-list').append(`<li id='item-${item.id}'>${item.name} - Quantity: ${item.quantity}</li>`);
        });
    }
};

// Initialize the inventory system when the document is ready
$(document).ready(function() {
    // Initialize the inventory with sample data
    Inventory.init();

    // Update the inventory display
    Inventory.updateDisplay();

    // Handle form submission for adding a new item
    $('#add-item-form').submit(function(event) {
        event.preventDefault();
        const name = $('#item-name').val();
        const quantity = parseInt($('#item-quantity').val(), 10);

        // Validate input
        if (!name || isNaN(quantity) || quantity <= 0) {
            alert('Please enter a valid item name and quantity.');
            return;
        }

        // Add the item to the inventory
        Inventory.addItem({ id: Inventory.items.length + 1, name: name, quantity: quantity });
    });

    // Handle item deletion
    $('#inventory-list').on('click', '.delete-item', function() {
        const itemId = $(this).data('id');
        Inventory.deleteItem(itemId);
    });

    // Handle item update
    $('#inventory-list').on('click', '.update-item', function() {
        const itemId = $(this).data('id');
        const itemName = $(this).siblings('.item-name').text().trim();
        const itemQuantity = parseInt($(this).siblings('.item-quantity').text().trim().split(' ')[1], 10);

        // Update the item in the inventory
        Inventory.updateItem(itemId, { name: itemName, quantity: itemQuantity });
    });
});