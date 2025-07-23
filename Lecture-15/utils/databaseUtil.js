const mysql=require('mysql12');
const pool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'Completecoding@01',
  database:'airbnb'
})
module.exports=pool.promise();