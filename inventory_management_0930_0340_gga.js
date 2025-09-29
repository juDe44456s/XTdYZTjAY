// 代码生成时间: 2025-09-30 03:40:22
$(document).ready(function() {

    // Inventory items array
    let inventoryItems = [];

    // Function to add a new item to the inventory
    function addItem(id, name, quantity) {
        if (inventoryItems.find(item => item.id === id)) {
            console.error('Item with the same ID already exists.');
            return;
        }
        inventoryItems.push({ id, name, quantity });
        console.log('Item added:', { id, name, quantity });
    }

    // Function to update an existing item in the inventory
    function updateItem(id, name, quantity) {
        let index = inventoryItems.findIndex(item => item.id === id);
        if (index === -1) {
            console.error('Item not found.');
            return;
        }
        inventoryItems[index] = { id, name, quantity };
        console.log('Item updated:', { id, name, quantity });
    }

    // Function to delete an item from the inventory
    function deleteItem(id) {
        let index = inventoryItems.findIndex(item => item.id === id);
        if (index === -1) {
            console.error('Item not found.');
            return;
        }
        inventoryItems.splice(index, 1);
        console.log('Item deleted:', id);
    }

    // Function to list all inventory items
    function listInventory() {
        console.log('Inventory List:', inventoryItems);
    }

    // Example usage of the inventory management system
    try {
        addItem(1, 'Widget', 100);
        addItem(2, 'Gadget', 200);
        updateItem(1, 'Widget', 150);
        listInventory();
        deleteItem(2);
        listInventory();
    } catch (error) {
        console.error('An error occurred:', error);
    }

});