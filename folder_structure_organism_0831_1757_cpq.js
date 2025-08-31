// 代码生成时间: 2025-08-31 17:57:02
$(document).ready(function() {
    // 绑定按钮点击事件，触发整理文件夹结构的功能
    $('#organizeButton').click(function() {
        try {
            // 获取需要整理的文件夹路径
            var folderPath = $('#folderPath').val();
            if (folderPath === '') {
                throw new Error('文件夹路径不能为空');
            }

            // 调用整理函数
            organizeFolderStructure(folderPath);
        } catch (error) {
            // 错误处理
            console.error(error.message);
            alert(error.message);
        }
    });

    // 整理文件夹结构的函数
    function organizeFolderStructure(folderPath) {
        // 读取文件夹内容
        fs.readdir(folderPath, function(err, files) {
            if (err) {
                throw new Error('读取文件夹失败: ' + err.message);
            }

            // 过滤出文件夹和文件
            var folders = files.filter(file => fs.statSync(path.join(folderPath, file)).isDirectory());
            var filesArray = files.filter(file => fs.statSync(path.join(folderPath, file)).isFile());

            // 根据文件类型进行分类
            var sortedFiles = filesArray.reduce((acc, file) => {
                if (file.endsWith('.txt')) {
                    acc.text.push(file);
                } else if (file.endsWith('.jpg') || file.endsWith('.png')) {
                    acc.images.push(file);
                } else if (file.endsWith('.js')) {
                    acc.scripts.push(file);
                } else {
                    acc.other.push(file);
                }
                return acc;
            }, { text: [], images: [], scripts: [], other: [] });

            // 创建分类文件夹
            sortedFiles.text.forEach(file => createFolderIfNotExist(folderPath, 'TextFiles'));
            sortedFiles.images.forEach(file => createFolderIfNotExist(folderPath, 'ImageFiles'));
            sortedFiles.scripts.forEach(file => createFolderIfNotExist(folderPath, 'ScriptFiles'));
            sortedFiles.other.forEach(file => createFolderIfNotExist(folderPath, 'OtherFiles'));

            // 移动文件到相应的分类文件夹
            filesArray.forEach(file => {
                var targetFolder = getTargetFolder(file);
                fs.renameSync(path.join(folderPath, file), path.join(folderPath, targetFolder, file));
            });

            alert('文件夹结构整理完成！');
        });
    }

    // 创建文件夹，如果文件夹已存在则不进行任何操作
    function createFolderIfNotExist(folderPath, folderName) {
        var folder = path.join(folderPath, folderName);
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
    }

    // 根据文件类型获取目标文件夹
    function getTargetFolder(file) {
        if (file.endsWith('.txt')) {
            return 'TextFiles';
        } else if (file.endsWith('.jpg') || file.endsWith('.png')) {
            return 'ImageFiles';
        } else if (file.endsWith('.js')) {
            return 'ScriptFiles';
        } else {
            return 'OtherFiles';
        }
    }
});