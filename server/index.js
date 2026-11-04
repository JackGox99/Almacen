const express = require('express');
const app= express();
const mysql=require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Colombia2024",
    database: "almacen"
});

app.listen(3001,()=>{
    console.log("Product service is running on port 3001");
});