// 代码生成时间: 2025-09-02 15:19:52
$(document).ready(function() {

    // 登录表单的提交事件
    $("#loginForm").submit(function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取用户输入的用户名和密码
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // 验证输入是否为空
        if (username === "" || password === "") {
            alert("用户名和密码不能为空！");
            return;
        }

        // 调用登录验证函数
        validateLogin(username, password);
    });

    // 登录验证函数
    function validateLogin(username, password) {
        // 模拟的用户数据，实际应用中应从数据库或其他存储获取
        var users = {
            "admin": "password123"
        };

        // 检查用户名是否存在
        if (users[username] === undefined) {
            alert("用户不存在！");
            return;
        }

        // 检查密码是否正确
        if (users[username] !== password) {
            alert("密码错误！");
            return;
        }

        // 登录成功，跳转到主页
        window.location.href = "index.html";
    }

});