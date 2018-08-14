const sql = require('mssql');

//dummy value
const value = '';

sql.connect().then(() =>  sql.query`select * from mytable where id = ${value}`)
.then(result => console.dir(result))
.catch(err => console.log(err));

sql.on('error', err => console.log(err));
