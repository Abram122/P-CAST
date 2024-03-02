// //adding dependencies
// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const app = express();

// //adding middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// //create mysql server
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "School_Project",
// });

// //post request 
// app.post("/adduser",(req,res)=>{
//     const {username , password,email,phone} = req.body
//     const addQuery =`INSERT INTO userinfo( username, Email, address, phone) VALUES (?,?,?,?)`
//     connection.execute(addQuery,[name,Email,address,phone],(err,data)=>{
//         if(err){
//             res.json("eroor happend")
//         }else{
//             res.json("user added succesflly")
//         }
//     })
// })
