const express= require("express"),
app=express(),
router = express.Router(),
homeController=require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
usersController = require("./controllers/usersController"),
postsController= require("./controllers/postsController"),

layouts = require("express-ejs-layouts"),
methodOverride = require("method-override"),
mongoose=require("mongoose"),
passport = require("passport"),
cookieParser = require("cookie-parser"),
expressSession = require("express-session"),
expressValidator = require("express-validator"),
connectFlash = require("connect-flash"),
User = require("./models/user");

mongoose.Promise = global.Promise;



mongoose.connect("mongodb://localhost:27017/Social_Media_BAS",
{useNewUrlParser:true});

app.set("port", process.env.PORT ||3000);

// app.get("/", (req,res) =>{
//     res.send("Welcome!");
// });

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.showIndex);

app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended:false
    })
);


app.use(express.json());

app.get("/friends",homeController.showFriends);
app.get("/homepage",homeController.showHomepage, postsController.index);

app.post("/post",postsController.create, postsController.redirectView);
app.get("/posts",postsController.index,postsController.indexView)
app.get("/posts/new", postsController.new);
app.get("/posts/:id", postsController.show, postsController.showView);
app.get("/posts/:id/edit", postsController.edit);
app.put("/posts/:id/update", postsController.update, postsController.redirectView);
app.delete("/posts/:id/delete", postsController.delete, postsController.redirectView);


app.get("/users", usersController.getAllUsers);
app.get("/signin",homeController.getSignin);
app.get("/signup", usersController.getUsersPage);
app.post("/user",usersController.saveUser);



app.use(errorController.pageNotFoundError);
app.use(errorController.interalServerError);

app.listen(app.get("port"), () =>{
    console.log(`Server is running on port: ${app.get("port")}`)

});