const con = {
    host:'145.14.145.53',
    user:'id21353654_testdb1',
    password:'P@ssw00rd',
    port:21,
    database:"id21353654_testdb1"
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