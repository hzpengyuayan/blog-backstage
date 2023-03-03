const mongoose = require("mongoose");
//schema数据表模型
const userSchema = new mongoose.Schema(
  //数据为表头数据列
  {
    username: String,
    pwd: {
      type: String,
    },
  }
);
// users为连接的文档名
const User = mongoose.model("users", userSchema);
//将User导出
module.exports = {
  User,
};
