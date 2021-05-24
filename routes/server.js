var mysql = require('mysql');
//连接数据库
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',  //用户名
    password:'123456',   //密码
    database:'ig',
    port:'3306'     //端口号
});
connection.connect(function(err){
    if(err){
      console.log('---:'+err);
      return;
    }
    console.log('连接succeed');
});
// 插入一条数据
var sql = 'insert into userlist (name,password) values(?,?)';
var param = ['yyqx28','yyqx1128'];
connection.query(sql,param,function(err,rs){
    if(err){
        console.log(err.message);
        return;
    }
    console.log('插入数据succeed');
});
//执行查询 查询ig数据库中的userlist表的数据
connection.query('select * from userlist',function(err,rs){
    if(err){
        console.log(err);
        return;
    }
    for(var i=0;i<rs.length;i++){
        console.log('name:'+rs[i].name+'password:'+rs[i].password);
    }
});
//关闭数据库
connection.end(function(err){
    if(err){
      console.log('---:'+err);
      return;
    }
    console.log('关闭succeed');
});