// 代码生成时间: 2025-08-23 11:43:12
$(document).ready(function() {

    /*
     * 数据分析函数
     * 该函数接受一个数据数组，并返回统计结果。
     *
     * @param data - 数据数组
     * @returns {{mean: number, median: number, mode: number, min: number, max: number}}
     */
    function analyzeData(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Invalid data input');
        }

        let sum = 0;
        let max = data[0];
        let min = data[0];
        let mode = data[0];
        let frequency = {};

        for (let i = 0; i < data.length; i++) {
            sum += data[i];
            if (data[i] > max) {
                max = data[i];
            }
            if (data[i] < min) {
                min = data[i];
            }
            frequency[data[i]] = (frequency[data[i]] || 0) + 1;
            mode = frequency[data[i]] > frequency[mode] ? data[i] : mode;
        }

        let mean = sum / data.length;
        let median = data.length % 2 === 0 ? (data[data.length / 2 - 1] + data[data.length / 2]) / 2 : data[Math.floor(data.length / 2)];

        return {
            mean: mean,
            median: median,
            mode: mode,
            min: min,
            max: max
        };
    }

    /*
     * 更新UI函数
     * 该函数根据统计结果更新UI。
     *
     * @param stats - 统计结果对象
     */
    function updateUI(stats) {
        $('#mean').text(stats.mean);
        $('#median').text(stats.median);
        $('#mode').text(stats.mode);
        $('#min').text(stats.min);
        $('#max').text(stats.max);
    }

    /*
     * 分析按钮点击事件
     * 当用户点击分析按钮时，触发此事件。
     *
     * @param event - 事件对象
     */
    $('#analyzeButton').click(function(event) {
        event.preventDefault();
        try {
            let data = $('#dataInput').val().split(',').map(Number);
            let stats = analyzeData(data);
            updateUI(stats);
        } catch (error) {
            alert(error.message);
        }
    });

});