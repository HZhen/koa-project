const Sequelize = require('sequelize');
// const sequelize = new Sequelize('dbname','dbusername','password',{
/* 只需要将代码中实例化Sequelie对象语句中的dbname更改为你的数据库名，
dbusername更改为你的数据库用户名，passoword更改为你的数据库密码，
其中数据库名和数据库用户名不能为空，密码可以为空，为空时则为空的字符串就可以了。 */

const sequelize = new Sequelize('koa_project_schema','root','hz921110',{

    host:'localhost',
    dialect:'mysql',
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});

module.exports = {
    sequelize
};
