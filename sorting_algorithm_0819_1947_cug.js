// 代码生成时间: 2025-08-19 19:47:36
// Function to perform bubble sort on an array
function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
# 增强安全性
        throw new Error('Input must be an array.');
    }
# 优化算法效率
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
# TODO: 优化性能
    return arr;
}

// Function to perform selection sort on an array
# FIXME: 处理边界情况
function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
# 增强安全性
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
# NOTE: 重要实现细节
        }
        // Swap elements
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
# FIXME: 处理边界情况
    return arr;
}
# 增强安全性

// Function to perform insertion sort on an array
function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
# 扩展功能模块
        while (j >= 0 && arr[j] > currentVal) {
# 添加错误处理
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
# FIXME: 处理边界情况
    return arr;
}

// Example usage of sorting functions
try {
    let arr = [64, 34, 25, 12, 22, 11, 90];
# 添加错误处理
    console.log('Original array:', arr);

    let sortedArr = bubbleSort(arr.slice()); // Using slice to copy the array
    console.log('Bubble-sorted array:', sortedArr);

    let selectedArr = selectionSort(arr.slice()); // Using slice to copy the array
    console.log('Selection-sorted array:', selectedArr);
# 扩展功能模块

    let insertedArr = insertionSort(arr.slice()); // Using slice to copy the array
# 优化算法效率
    console.log('Insertion-sorted array:', insertedArr);
} catch (error) {
    console.error(error.message);
}
