"use strict";

const mongoose = require("mongoose"),
  User = require("./models/user");

mongoose.connect(
  "mongodb://localhost:27017/Social_Media_BAS",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
mongoose.connection;

var contacts = [
    {
      fname: "Tyler",
      lname: "Hooptie",
      username: "TylerFiller",
      gender: "male",
      location: "Colorado",
      email: "Tyler767@hotmail.com",
      namepassword: "HeHe123",
      namepasswordConfirm: "HeHe123",
      dob: new Date('2021-03-09T00:00:00.000+00:00'),
      questions: "What is your mother's maiden name?",
      question1: "Jane",
      namebio: "hehexd"
    },
    {
        fname: "Faker",
        lname: "Baker",
        username: "MidLaneChamp",
        gender: "male",
        location: "New York",
        email: "FakeIt@gmail.com",
        namepassword: "LoL212",
        namepasswordConfirm: "LoL212",
        dob: new Date('2021-03-09T00:00:00.000+00:00'),
        questions: "What is your hometown?",
        question1: "Seoul",
        namebio: "I am the best"
    },
    {
        fname: "Pablo",
        lname: "Modelo",
        username: "RageKing767",
        gender: "male",
        location: "California",
        email: "Oops@gmail.com",
        namepassword: "yUpUp232",
        namepasswordConfirm: "yUpUp232",
        dob: new Date('2021-03-09T00:00:00.000+00:00'),
        questions: "What is your oldest brother middle name?",
        question1: "Ryan",
        namebio: "Let's have fun!"
    },
    {
        fname: "Jade",
        lname: "Guppy",
        username: "Guppy7878",
        gender: "male",
        location: "Wyoming",
        email: "Dragonboat2@gmail.com",
        namepassword: "sWim222",
        namepasswordConfirm: "sWim222",
        dob: new Date('2021-03-09T00:00:00.000+00:00'),
        questions: "What is your oldest brother middle name?",
        question1: "Brandon",
        namebio: "Mazda go zoom zoom!"
    }
  ];

User.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data is empty!");
  });

var commands = [];

contacts.forEach(c => {
  commands.push(
    User.create({
        fname: c.fname,
        lname: c.lname,
        username: c.username,
        gender: c.gender,
        location: c.location,
        email: c.email,
        namepassword: c.namepassword,
        namepasswordConfirm: c.namepasswordConfirm,
        dob: c.dob,
        questions: c.questions,
        question1:c.question1,
        namebio: c.namebio,
    })
  );
});

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(`ERROR: ${error}`);
  });
