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

exports.showFriends =(req,res) => {
    res.render("friends",{listedFriends:friends});
}


exports.showIndex = (req, res) => {
    res.render("index");
}
exports.showHomepage = (req, res) => {
    res.render("homepage");
}

exports.showSignUp = (req, res) => {
    res.render("signup")
}