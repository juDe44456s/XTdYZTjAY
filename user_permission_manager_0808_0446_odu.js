// 代码生成时间: 2025-08-08 04:46:54
(function($) {

  // 定义用户权限管理类
  var UserPermissionManager = function() {
    // 用户权限数据存储
    this.permissions = {};
  };

  // 原型链上添加方法
  UserPermissionManager.prototype = {
    // 添加用户权限
    addPermission: function(userId, permission) {
      if (!this.permissions[userId]) {
        this.permissions[userId] = [];
      }
      if (!this.permissions[userId].includes(permission)) {
        this.permissions[userId].push(permission);
        console.log("添加权限成功：", permission, userId);
      } else {
        console.error("权限已存在：", permission, userId);
      }
    },

    // 删除用户权限
    removePermission: function(userId, permission) {
      if (this.permissions[userId]) {
        const index = this.permissions[userId].indexOf(permission);
        if (index > -1) {
          this.permissions[userId].splice(index, 1);
          console.log("删除权限成功：", permission, userId);
        } else {
          console.error("权限不存在：", permission, userId);
        }
      } else {
        console.error("用户不存在：", userId);
      }
    },

    // 检验用户是否具有特定权限
    checkPermission: function(userId, permission) {
      if (this.permissions[userId] && this.permissions[userId].includes(permission)) {
        return true;
      } else {
        return false;
      }
    }
  };

  // 将UserPermissionManager类暴露给全局变量
  window.UserPermissionManager = UserPermissionManager;

})(jQuery);

// 示例用法：
$(document).ready(function() {
  // 实例化用户权限管理对象
  var permissionManager = new window.UserPermissionManager();

  // 添加用户权限
  permissionManager.addPermission("user1", "edit");
  permissionManager.addPermission("user2", "delete");

  // 删除用户权限
  permissionManager.removePermission("user1", "edit");

  // 检验用户权限
  var hasEditPermission = permissionManager.checkPermission("user1", "edit");
  console.log("User1 has edit permission: ", hasEditPermission); // 应该输出 false

  var hasDeletePermission = permissionManager.checkPermission("user2", "delete");
  console.log("User2 has delete permission: ", hasDeletePermission); // 应该输出 true
});