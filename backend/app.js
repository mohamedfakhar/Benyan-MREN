//  Dotenv
 require ("dotenv").config();

//  express
const express= require("express");
const app = express();

//  middelware json
app.use(express.json());
//  connection DB
// Simple looger
if (process.env.NODE_ENV === "dev") {
    app.use((req,res,next) =>{
        console.log(`${req.method} ${req.originalUrl}`)
        next();
    })
}
// Test Route
app.get("/test", (req,res) => {
    res.json({msg: "Test Route"})
})
const connectedDB = require("./config/db")
connectedDB();

//  port 
const port = process.env.PORT || 3000;

//  Run server
app.listen(port, () => {
    console.log(`Server Is Runing ${port}`)
});
