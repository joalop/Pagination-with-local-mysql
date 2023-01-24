// const mysql2 = require('mysql2')
// const { HOST, USER, PASSWORD, DATABASE } = require('./config.js')
// const conn = mysql2.createConnection({
//     host: HOST,
//     user: USER, 
//     password: PASSWORD,
//     database: DATABASE, 
// })
// //'localhost' //'root' //'root' //'pagination'

// try{
//     //conn.connect()
    
// } catch (err){
//     console.log('Error')
// };

// module.exports = () => { conn };

// ---------------------------

const mysql = require('mysql2')
const { HOST, USER, PASSWORD, DATABASE } = require('./config.js')


// const conn = mysql.createConnection({
//     host: HOST,
//     user: USER,
//     password: PASSWORD,
//     database: DATABASE,
// })

// module.exports = { conn };

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'pagination',
    })
}