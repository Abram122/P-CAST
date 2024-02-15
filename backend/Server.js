const express =  require('express')
const mysql = require('mysql2')
const cors = require("cors")
const session = require("express-session")
const store = new session.MemoryStore()
const multer = require('multer')
const path = require('path')
const cookieParser = require("cookie-parser")
const JWT = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.use(cors())
app.use(session({
    secret:"some secret",
    cookie:{maxAge:300000},
    saveUninitialized:false,
    store
}))
app.use(express.static('public'))
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"pcast"
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    const sql = `SELECT * FROM signup WHERE email = ? AND password = ?`
    conn.query(sql,[email,password],(err,data)=>{
        if(err){
            return res.send("Error from server")
        }
        if(data.length > 0){
            if(req.session.authenticated){

            }else{
                const name = data[0].user_name
                const email = data[0].email
                req.session.authenticated = true
                req.session.user ={
                    name,email
                }
                res.send(req.session)
            }
        }
        else{
            return res.send("No email exits or password is wrong")
        }
    })
})

app.post('/adduser',(req,res)=>{
    const {name,email,phone,password} = req.body
    const sql = `SELECT * FROM signup WHERE email = ?`
    conn.query(sql,[email],(err,data)=>{
        if(err){
            res.send(err)
        }if(data.length > 0){
            res.send("you already have an account please signin")
        }else{
            conn.query(`INSERT INTO signup(user_name, email,phone, password) VALUES (?,?,?,?)`,[name,email,phone,password],(err,data)=>{
                if(err){
                    res.send("err")
                }else{
                    res.send("done")
                }
            })
        }
    })
        
})
// upload image for course -
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file || !req.file.filename) {
        return res.status(400).send('No files were uploaded.');
    }

    // File uploaded successfully
    // Save file data to the database
    conn.query(`INSERT INTO courses(courseName, description, availability, courseImage) VALUES (?,?,?,?)`, [req.body.courseName,req.body.description,req.body.availability,req.file.filename], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send('An error occurred while saving the file.');
        }

        return res.status(200).send('File uploaded and saved to the database!');
    });
});

app.get('getcourses',(req,res)=>{
    
        conn.query(``,(err,data)=>{
            if(err){
                res.send("err")
            }else{
                res.send(data)            
            }
        })
    

})


app.get("/getmessage",(req,res)=>{
    conn.query(`SELECT * FROM community`,(err,data)=>{
        if(err){
            res.send("err")
        }else{

            res.send(data)
        }
    })
})


app.get("/getcomment",(req,res)=>{
    conn.query(`SELECT * FROM comments`,(err,data)=>{
        if(err){
            res.send("err")
        }else{

            res.send(data)
        }
    })
})

app.post("/addmessage",(req,res)=>{ 
    const {inputValue,name,catogery} = req.body
    conn.query(`INSERT INTO community(message,name,catogery) VALUES (?,?,?)`,[inputValue,name,catogery],(err,data)=>{
        if(err){
            res.send("err")
        }else{

            res.send("done")
        }
    })
})

app.post("/addcomment",(req,res)=>{ 
    const {comment,name,id} = req.body
    conn.query(`INSERT INTO comments(name, message, id) VALUES (?,?,?)`,[comment,name,id],(err,data)=>{
        if(err){
            res.send("err")
        }else{

            res.send("done")
        }
    })
})

app.listen(5000,()=>{
    console.log("server is runnig")
})
