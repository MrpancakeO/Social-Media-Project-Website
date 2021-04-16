"use strict";

const mongoose = require("mongoose"),
userSchema=mongoose.Schema({
    fname: {
        type :String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    namepassword: {
        type: String,
        required: true
    },        
    namepasswordConfirm: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    questions: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        required: true
    },
    namebio: {
        type: String,
        required: true
    },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: Post}],
});

userSchema.methods.getInfo = function(){
    return `FirstName: ${this.fname} LastName ${this.lname} Username ${this.username} Gender ${this.gender} Location ${this.location} 
    Email ${this.email} Password ${this.namepassword} ConfirmPassword ${this.namepasswordConfirm} dob ${this.dob} Questions ${this.questions} Question1 ${this.question1} NameBio ${this.namebio}`;
}


module.exports=mongoose.model("User", userSchema);