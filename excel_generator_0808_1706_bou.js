// 代码生成时间: 2025-08-08 17:06:00
(function($) {
    "use strict";

    // ExcelGenerator类
    var ExcelGenerator = {
        generateTable: function(data, columnNames) {
            // 检查输入数据的合法性
            if (!Array.isArray(data) || !Array.isArray(columnNames) || columnNames.length === 0) {
                console.error('Invalid input data or column names.');
                return;
            }

            // 创建表格
            var table = $('<table/>');
            var thead = $('<thead/>').appendTo(table);
            var tbody = $('<tbody/>').appendTo(table);

            // 添加表头
            var headerRow = $('<tr/>').appendTo(thead);
            columnNames.forEach(function(columnName) {
                $('<th/>').text(columnName).appendTo(headerRow);
            });

            // 添加表体
            data.forEach(function(row) {
                var dataRow = $('<tr/>').appendTo(tbody);
                columnNames.forEach(function(columnName) {
                    var cellValue = row[columnName] || '';
                    $('<td/>').text(cellValue).appendTo(dataRow);
                });
            });

            // 将表格转换为Excel文件并触发下载
            this.downloadTable(table, 'generated_excel.xlsx');
        },

        downloadTable: function(table, filename) {
            // 将表格HTML转换为Excel文件
            var html = table[0].outerHTML;
            var uri = 'data:application/vnd.ms-excel;base64,' + window.btoa(unescape(encodeURIComponent(html)));
            var link = $('<a/>', {
                href: uri,
                download: filename,
                style: 'display:none;'
            }).appendTo('body');

            // 触发下载
            link[0].click();
            link.remove();
        }
    };

    // 将ExcelGenerator绑定到window对象，以便外部访问
    window.ExcelGenerator = ExcelGenerator;

})(jQuery);

// 使用示例
// 假设有一个数据数组和一个列名数组
var data = [{
//     "name": "John", "age": 30, "city": "New York"
// }, {
//     "name": "Jane", "age": 25, "city": "Los Angeles"
// }];
// var columnNames = ["name", "age", "city"];
// ExcelGenerator.generateTable(data, columnNames);