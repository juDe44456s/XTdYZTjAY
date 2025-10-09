// 代码生成时间: 2025-10-10 00:00:25
// Define the WealthManagementTool class
class WealthManagementTool {
  constructor() {
    this.assets = []; // Holds the list of assets
  }

  /**
   * Adds an asset to the list.
   * @param {Object} asset - The asset to add. It should have id, name, and value properties.
   */
  addAsset(asset) {
    if (!asset.id || !asset.name || !asset.value) {
      throw new Error('Asset must have id, name, and value properties.');
    }
    this.assets.push(asset);
  }

  /**
   * Calculates the net worth of all assets.
   * @returns {number} The net worth of all assets.
   */
  calculateNetWorth() {
    return this.assets.reduce((total, asset) => total + asset.value, 0);
  }

  /**
   * Displays a report of all assets.
   * @param {boolean} detailed - If true, display a detailed report.
   */
  displayReport(detailed = false) {
    console.log('Assets Report:');
    this.assets.forEach((asset, index) => {
      if (detailed) {
        console.log(`Asset ${index + 1}:
  ID: ${asset.id}
  Name: ${asset.name}
  Value: ${asset.value}`);
      } else {
        console.log(`Asset ${index + 1}: ${asset.name} - ${asset.value}`);
      }
    });
  }
}

// Create an instance of WealthManagementTool
const wealthTool = new WealthManagementTool();

// Example usage
try {
  wealthTool.addAsset({ id: 1, name: 'Stock', value: 10000 });
  wealthTool.addAsset({ id: 2, name: 'Real Estate', value: 500000 });
  wealthTool.addAsset({ id: 3, name: 'Savings', value: 5000 });

  console.log('Net Worth:', wealthTool.calculateNetWorth());
  wealthTool.displayReport(true);
} catch (error) {
  console.error('Error:', error.message);
}
