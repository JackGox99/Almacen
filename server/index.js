const express = require('express');
const app= express();
const mysql=require("mysql2")
const cors=require("cors");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bogotrash0192*",
    database: "almacen"
});

app.post("/create",(req,res)=>{
    const nombre=req.body.nombre;
    const description=req.body.description;
    const price=req.body.price;
    const stock=req.body.stock;
    connection.query("INSERT INTO products (nombre, description, price, stock) VALUES (?,?,?,?)",[nombre, description, price, stock],
        (err,result)=>{
            if(err){
                console.log(err);
                res.status(500).send(err.sqlMessage || "Error creating product");
            }else{
                res.send("Product Created Succesfully");
            }
        }
    )
});

app.listen(3001,()=>{
    console.log("Product server is running on port 3001");
});