//引入创建好的User来提供数据库能力
const { User } = require("../models");

const loginCtl = async (ctx) => {
  let { username, pwd } = ctx.request.body;

  await User.findOne({ username, pwd })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          //token: token,
          msg: "登录成功",
        };
      } else {
        ctx.body = {
          code: 300,
          msg: "用户名或密码错误",
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 500,
        msg: err,
      };
    });
};

const userAdd = async (ctx) => {
  let { username, pwd } = ctx.request.body;
  const res = await User.findOne({ username });
  if (res) {
    ctx.body = { code: 407, msg: "此用户已存在" };
  } else {
    await User.create({ username, pwd })
      .then((result) => {
        ctx.body = { code: 200, data: { username } };
      })
      .catch((err) => {
        ctx.body = { code: 400, msg: "新增用户异常" };
      });
  }
};

module.exports = {
  loginCtl,
  userAdd,
};
