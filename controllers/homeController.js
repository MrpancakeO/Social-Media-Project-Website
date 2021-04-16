var friends=[
    {
        name: "Hanky Panky",
        major: "Biology",
        hobby: "Painting"
    },

    {
        name: "John Deere",
        major: "Nuclear Engineering",
        hobby: "Hunting"
    },

    {
        name: "Kris Topher",
        major: "Chemistry",
        hobby: "Disecting Humans"
    },

    {
        name: "Sharon Copperbottom",
        major: "Mathematics",
        hobby: "Puzzles"
    }
]
const Post = require("../models/post");

// exports.showFriends =(req,res) => {
//     res.render("friends",{listedFriends:friends});
// }

// exports.getSignin =(req,res) => {
//     res.render("signin");
// }

// exports.showIndex = (req, res) => {
//     res.render("index");
// }
// exports.showHomepage = (req, res) => {
//     res.render("homepage");
// }

// exports.showSignUp = (req, res) => {
//     res.render("signup");
// }


// exports.getPosts = (req,res) =>{
//     Post.find()
//             .then(posts => {
//                 res.locals.posts = posts;
//                 homePosts=posts;
//                 console.log(homePosts)
//                 next()
//             })
//             .catch(error => {
//                 console.log(`Error gathering post data: ${error.message}`)
//                 next(error);
//             })
// }


module.exports = {
    index: (req, res, next) => {
        Post.find()
            .then(posts => {
                res.locals.posts = posts;
                homePosts=posts;
                console.log(homePosts)
                next()
            })
            .catch(error => {
                console.log(`Error gathering post data: ${error.message}`)
                next(error);
            })
    },
    showFriends: (req,res) =>{
        res.render("friends",{listedFriends:friends});
    },
    getSignin: (req,res) =>{
        res.render("signin");
    },
    showIndex: (req,res) =>{
        res.render("index");
    },
    showHomepage: (req,res) =>{
        res.render("homepage");
    },
    showSignUp: (req,res) =>{
        res.render("signup")
    }
}