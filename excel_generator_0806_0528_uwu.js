// 代码生成时间: 2025-08-06 05:28:31
$(document).ready(function () {

    // 初始化表格数据数组
    let tableData = [];

    // 添加表格行到表格数据数组
    function addTableRow(data) {
        if (!data) {
            console.error('Error: No data provided for table row.');
            return;
        }
        tableData.push(data);
    }

    // 生成Excel表格
    function generateExcel() {
        if (tableData.length === 0) {
            console.error('Error: No data to generate Excel from.');
            return;
        }

        // 创建Excel文件
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // 生成下载链接并触发下载
        XLSX.writeFile(workbook, 'auto_generated_excel.xlsx');
    }

    // 绑定点击事件到生成按钮
    $('#generateButton').on('click', function () {
        try {
            // 调用生成Excel表格的函数
            generateExcel();
        } catch (error) {
            console.error('Error generating Excel:', error);
        }
    });

    // 绑定点击事件到添加行按钮
    $('#addRowButton').on('click', function () {
        try {
            // 获取用户输入的数据
            const rowData = {
                column1: $('#column1Input').val(),
                column2: $('#column2Input').val(),
                column3: $('#column3Input').val()
            };
            // 添加行到表格数据数组
            addTableRow(rowData);
            // 显示添加的行
            displayTableData();
        } catch (error) {
            console.error('Error adding row:', error);
        }
    });

    // 显示表格数据
    function displayTableData() {
        const table = $('#table');
        table.empty(); // 清空表格

        // 遍历表格数据数组，创建表格行
        tableData.forEach((row, index) => {
            const tr = $('<tr></tr>');
            tr.append($('<td></td>').text(row.column1));
            tr.append($('<td></td>').text(row.column2));
            tr.append($('<td></td>').text(row.column3));
            table.append(tr);
        });
    }

    // 初始化表格显示
    displayTableData();
});