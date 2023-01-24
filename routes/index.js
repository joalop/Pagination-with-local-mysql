const express = require('express');
const router = express.Router();

const dbConnection = require('../config/dbConnection.js');
const conn = dbConnection()
let token = 0
let inicio = 0
let final = 5

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query("select count(*) as 'total' from pagine", (err_total, total) => {
    console.log(total)

  conn.query('select * from pagine', (err_all, todos ) => {
      //console.log( Math.trunc(total[0].total/5) )
      let vueltas = Math.trunc(total[0].total/5) //3

      if( (vueltas*5) == total[0].total){
          //3
      }else{
        vueltas += 1 //4
      }
      let cantidad = total[0].total

      conn.query(`select * from pagine Limit ${inicio},${final}`,(err_parse, chunck) => {
        chunck
        res.render('index', { title: 'Pagination MYSQL', cantidad, chunck, inicio});
      })
    })
  })
});

router.post('/', function(req, res, next){
  //console.log(req.body)
  const {siguiente, atras} = req.body
  //console.log(siguiente, ' :Siguiente')
  //console.log(atras,' :Atras')

  if(siguiente != undefined){
    inicio += 5
    res.redirect('/')
  }

  if(atras != undefined){
    inicio -= 5
    res.redirect('/')
  }
  res.render('index')
})

module.exports = router;
