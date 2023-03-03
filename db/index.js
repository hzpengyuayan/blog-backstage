const mongoose = require('mongoose')
module.exports = () => {
    //连接数据库地址下面所创建的文档
    mongoose.connect('mongodb://localhost:27017/blog', {
        useNewUrlParser: true
    }).then(res => {
        console.log('数据库连接成功！');
    }).catch(err => {
        console.log('数据库连接失败！' + err);
    })
}