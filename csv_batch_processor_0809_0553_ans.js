// 代码生成时间: 2025-08-09 05:53:21
(function($) {
    "use strict";

    // CSVProcessor类
    var CSVProcessor = {
        // 处理CSV文件的函数
        processCSV: function(file, callback) {
            if (!(file instanceof File)) {
                throw new Error("Input must be a File object");
            }
            
            var reader = new FileReader();
            reader.onload = function(e) {
                var result = e.target.result;
                var data = $.csv.toArrays(result);
                callback(null, data);
            };
            reader.onerror = function() {
                callback(new Error("FileReader error"));
            };
            reader.readAsText(file);
        },
        
        // 批量处理CSV文件的函数
        batchProcessCSV: function(files, callback) {
            if (!Array.isArray(files)) {
                throw new Error("Files must be an array of File objects");
            }
            
            // 处理每个CSV文件并收集结果
            var results = [];
            files.forEach(function(file, index) {
                CSVProcessor.processCSV(file, function(err, data) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    
                    results[index] = data;
                    
                    // 检查是否所有文件都已处理完毕
                    if (results.length === files.length) {
                        callback(null, results);
                    }
                });
            });
        }
    };

    // 将CSVProcessor类暴露为全局变量
    window.CSVProcessor = CSVProcessor;

}(jQuery));