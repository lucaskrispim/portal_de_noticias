let mysql = require('mysql');

let connMysql = ()=>{
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database:'portal_noticias'
    });
};        

module.exports = ()=>{
    return connMysql;
};
