// 代码生成时间: 2025-09-17 19:55:47
 * Features:
 * - Add item to inventory
 * - Remove item from inventory
 * - Update item quantity in inventory
 * - Display current inventory items
 * 
 * @author Your Name
 * @version 1.0
 */

// Define the inventory object to hold items
const inventory = {};

// Function to add or update an item in the inventory
function addItem(id, quantity) {
    // Check if the item exists in the inventory
    if (inventory[id]) {
        // Update the quantity of the existing item
        inventory[id] += quantity;
    } else {
        // Add new item to the inventory
        inventory[id] = quantity;
    }
    // Display the updated inventory
    displayInventory();
}

// Function to remove an item from the inventory
function removeItem(id) {
    // Check if the item exists in the inventory
    if (inventory[id]) {
        delete inventory[id]; // Remove the item
    } else {
        // Handle error if item not found
        console.error('Item not found in inventory');
    }
    // Display the updated inventory
    displayInventory();
}

// Function to update the quantity of an item in the inventory
function updateItemQuantity(id, quantity) {
    // Check if the item exists in the inventory
    if (inventory[id]) {
        if (quantity === 0) {
            // Remove the item if quantity is 0
            removeItem(id);
        } else {
            inventory[id] = quantity; // Update the quantity
        }
    } else {
        // Handle error if item not found
        console.error('Item not found in inventory');
    }
    // Display the updated inventory
    displayInventory();
}

// Function to display the current inventory items
function displayInventory() {
    // Clear the inventory display area
    $('#inventoryDisplay').empty();
    // Check if inventory is empty
    if (Object.keys(inventory).length === 0) {
        $('#inventoryDisplay').append('<p>No items in inventory.</p>');
        return;
    }
    // Append each item to the display area
    Object.keys(inventory).forEach(id => {
        $('#inventoryDisplay').append(`<p>${id}: ${inventory[id]} units</p>`);
    });
}

// jQuery event listeners for adding and removing items
$(document).ready(function() {
    // Event listener for adding items
    $('#addBtn').click(function() {
        const id = $('#itemId').val();
        const quantity = parseInt($('#itemQuantity').val(), 10);
        if (!id || isNaN(quantity)) {
            alert('Please enter a valid item ID and quantity.');
            return;
        }
        addItem(id, quantity);
    });

    // Event listener for removing items
    $('#removeBtn').click(function() {
        const id = $('#itemId').val();
        if (!id) {
            alert('Please enter a valid item ID.');
            return;
        }
        removeItem(id);
    });

    // Event listener for updating item quantities
    $('#updateBtn').click(function() {
        const id = $('#itemId').val();
        const quantity = parseInt($('#itemQuantity').val(), 10);
        if (!id || isNaN(quantity)) {
            alert('Please enter a valid item ID and quantity.');
            return;
        }
        updateItemQuantity(id, quantity);
    });
});