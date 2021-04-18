const User = require("../models/user");

// exports.getAllUsers = (req, res) => {
//     User.find({})
//         .exec()
//         .then(users => {
//             res.render("users", { users: users })
//         })
//         .catch((error) => {
//             console.log(error);
//             return [];
//         })
//         .then(() => {
//             console.log("promise complete")
//         })


// };


// exports.getUsersPage = (req, res) => {
//     res.render("signup");
// }

// exports.saveUser = (req, res) => {
//     let newUser = new User({
//         fname: req.body.fname,
//         lname: req.body.lname,
//         username: req.body.username,
//         gender: req.body.gender,
//         location: req.body.location,
//         email: req.body.email,
//         namepassword: req.body.namepassword,
//         namepasswordConfirm: req.body.namepasswordConfirm,
//         dob: req.body.dob,
//         questions: req.body.questions,
//         question1: req.body.question1,
//         namebio: req.body.namebio
//     });
//     newUser.save()
//         .then(() => {
//             res.render("thanks")
//         })
//         .catch(error => { res.send(error) });
// }
// exports.login = (req, res) => {
//     res.render("users/login")
// }

module.exports = {
    getAllUsers: (req, res) => {
        User.find({})
            .exec()
            .then(users => {
                res.render("users", { users: users })
            })
            .catch((error) => {
                console.log(error);
                return [];
            })
            .then(() => {
                console.log("promise complete")
            })
    
    
    },
    getUsersPage: (req, res) => {
        res.render("signup");
    },
    saveUser: (req, res) => {
        let newUser = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            gender: req.body.gender,
            location: req.body.location,
            email: req.body.email,
            namepassword: req.body.namepassword,
            namepasswordConfirm: req.body.namepasswordConfirm,
            dob: req.body.dob,
            questions: req.body.questions,
            question1: req.body.question1,
            namebio: req.body.namebio
        });
        newUser.save()
            .then(() => {
                res.render("thanks")
            })
            .catch(error => { res.send(error) });
    },

    login:(req, res) => {
        res.render("users/login")
    },

    index: (req, res, next) => {
        User.find()
            .then(users => {
                res.locals.users = users;
                homeUsers = users;
                //console.log(homeUsers)
                next()
            })
            .catch(error => {
                console.log(`Error gathering user data: ${error.message}`)
                next(error);
            })
    },
    indexView: (req, res) => {
        res.render("users/index");
    },
    homeView: (req, res) => {
        res.render("/homepage");
    },
    new: (req, res) => {
        res.render("users/new");
    },

    create: (req, res, next) => {
        let newUser = new User({

            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            gender: req.body.gender,
            location: req.body.location,
            email: req.body.email,
            namepassword: req.body.namepassword,
            namepasswordConfirm: req.body.namepasswordConfirm,
            dob: req.body.dob,
            questions: req.body.questions,
            question1: req.body.question1,
            namebio: req.body.namebio

        });
        User.create(newUser)
            .then(user => {
                res.locals.user = user;
                res.locals.redirect = "/homepage";
                next();
            })
            .catch(error => {
                console.log(`Error saving user: ${error.message}`);
                next(error)
            })
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath != undefined) res.redirect(redirectPath);
        else next();
    },
    show: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Error gathering user by ID: ${error.message}`);
                next(error)
            })
    },

    showView: (req, res) => {
        res.render("users/show");
    },
    edit: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.render("users/edit", { user: user });
            })
            .catch(error => {
                console.log(`Error gathering user by ID: ${error.message}`);
                next(error);
            })
    },

    update: (req, res, next) => {
        let userId = req.params.id;
        let updatedUser = new User({

            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            gender: req.body.gender,
            location: req.body.location,
            email: req.body.email,
            namepassword: req.body.namepassword,
            namepasswordConfirm: req.body.namepasswordConfirm,
            dob: req.body.dob,
            questions: req.body.questions,
            question1: req.body.question1,
            namebio: req.body.namebio,
            _id: userId

        });

        User.findByIdAndUpdate(userId, updatedUser)
            .then(user => {
                res.locals.user = user;
                res.locals.redirect = `/users/${user._id}`;
                next();
            })
            .catch(error => {
                console.log(`Error gathering user by ID: ${error.message}`);
                next(error);
            })
    },

    delete: (req, res, next) => {
        let userId = req.params.id;
        User.findByIdAndRemove(userId)
            .then(() => {
                res.locals.redirect = "/users";
                next();
            })
            .catch(error => {
                console.log(`Error gathering user by ID: ${error.message}`);
                next(error);
            })
    }
}
