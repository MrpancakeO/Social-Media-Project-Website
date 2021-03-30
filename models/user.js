const mongoose = require("mongoose"),
userSchema=mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    
});
module.exports=mongoose.model("User", userSchema);