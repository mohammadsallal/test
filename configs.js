const con = {
    host:'localhost',
    user:'root',
    password:'2468',
    port:3306,
}
const port = 3000;
const CheckStartedServer = ()=>{console.log(`Server Started on port: ${port}`)}


const sql1 = `INSERT INTO users(username , password) VALUES (? , ?)`

module.exports =
 {
  con,
  sql1 ,
  port,
  CheckStartedServer};