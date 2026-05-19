const mongoose = require("mondoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
 
    username: {
        type: String,
        requireed: [true, "Username Is Required"]
    },
     email: {
        type: String,
        requireed: [true, "email Is Required"]
    },
     password: {
        type: String,
        requireed: [true, "password Is Required"],
        minlength: 6,
    }

}, {timestamps:true} )

adminSchema.pre("save", async function(next) {

    if(!this.isModfied("password") ) return next();
    this.password = await bcrubt.hash(this.password, 10);
    
});


adminSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password);
    
}
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;