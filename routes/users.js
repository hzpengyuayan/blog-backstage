const router = require("koa-router")();
//使用users来作为借口前缀
router.prefix("/users");

//需要创建control文件夹来管理各个路由所需的回调函数
const { loginCtl, userAdd } = require("../controllor/userControl");

//创建login登录接口地址，loginCtl为所需要处理的函数
router.post("/login", loginCtl);

router.post("/add", userAdd);

module.exports = router;
