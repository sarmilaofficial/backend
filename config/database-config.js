const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeetestdb'
});

connection.connect((err)=>{
  if (err) {
    console.log(err);
  }else{
    console.log("Database connected!");
  }
})
module.exports = connection; 