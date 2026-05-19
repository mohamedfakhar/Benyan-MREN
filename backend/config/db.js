const mongoos = require("mongoose");

const connectedDB= async () =>{
    try{
        await mongoos.connect(process.env.MONGO_URL);
        console.log("DB Is Connection");

    }catch (error){
     console.log(error)
    }
}
module.exports = connectedDB;