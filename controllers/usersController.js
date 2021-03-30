const User = require("../models/user");

exports.getAllUsers=(req,res)=>{
    User.find({})
    .exec()
    


};