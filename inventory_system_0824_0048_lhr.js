// 代码生成时间: 2025-08-24 00:48:46
 * @param {string} name - The name of the item.
 * @param {number} quantity - The quantity of the item.
 * @param {number} price - The price of the item.
 */
function InventoryItem(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

/**
 * Inventory class to manage all inventory items.
 * @param {string} id - The identifier for the inventory.
 */
function Inventory(id) {
    this.id = id;
    this.items = [];
}

/**
 * Adds an item to the inventory.
 * @param {InventoryItem} item - The item to add.
 */
Inventory.prototype.addItem = function(item) {
    if (!(item instanceof InventoryItem)) {
        throw new Error('Invalid item type.');
    }
    this.items.push(item);
    console.log('Item added:', item.name);
};

/**
 * Removes an item from the inventory.
 * @param {string} name - The name of the item to remove.
 */
Inventory.prototype.removeItem = function(name) {
    const index = this.items.findIndex(item => item.name === name);
    if (index === -1) {
        throw new Error('Item not found.');
    }
    this.items.splice(index, 1);
    console.log('Item removed:', name);
};

/**
 * Updates the quantity of an item in the inventory.
 * @param {string} name - The name of the item to update.
 * @param {number} newQuantity - The new quantity of the item.
 */
Inventory.prototype.updateQuantity = function(name, newQuantity) {
    const item = this.items.find(item => item.name === name);
    if (!item) {
        throw new Error('Item not found.');
    }
    if (newQuantity < 0) {
        throw new Error('Quantity cannot be negative.');
    }
    item.quantity = newQuantity;
    console.log('Quantity updated for:', name);
};

/**
 * Displays the inventory items.
 */
Inventory.prototype.displayItems = function() {
    console.log('Inventory Items:', this.items);
};

// Example usage:

try {
    // Create a new inventory instance
    const myInventory = new Inventory('inv001');

    // Create some inventory items
    const item1 = new InventoryItem('Apple', 100, 0.50);
    const item2 = new InventoryItem('Banana', 150, 0.30);

    // Add items to the inventory
    myInventory.addItem(item1);
    myInventory.addItem(item2);

    // Display items in the inventory
    myInventory.displayItems();

    // Update the quantity of an item
    myInventory.updateQuantity('Apple', 120);

    // Remove an item from the inventory
    myInventory.removeItem('Banana');

    // Display items in the inventory after removal
    myInventory.displayItems();
} catch (error) {
    console.error('An error occurred:', error.message);
}
