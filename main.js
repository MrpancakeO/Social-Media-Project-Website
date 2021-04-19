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

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

router.use(express.static("public"));
router.use(layouts);
router.use(expressValidator());
router.use(
    express.urlencoded({
        extended: false
    })
);

router.use(methodOverride("_method", {methods: ['POST', 'GET']}));

router.use(express.json());

router.use(cookieParser("my_passcode"));
router.use(expressSession({
    secret: "my_passcode",
    cookie: {
        maxAge: 360000
    },
    resave: false,
    saveUninitialized: false
}));


router.use(connectFlash());

router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


router.use((req, res, next) => {
     res.locals.flashMessages = req.flash();
     res.locals.loggedIn = req.isAuthenticated();
     res.locals.currentUser = req.user;
     next();
 })

 router.get("/", homeController.index);

router.get("/friends",homeController.showFriends);
router.get("/homepage",homeController.showHomepage );

router.post("/post",postsController.create, postsController.redirectView, postsController.index);
router.get("/posts",postsController.index,postsController.indexView)
router.get("/posts/new", postsController.new);
router.get("/posts/:id", postsController.show, postsController.showView);
router.get("/posts/:id/edit", postsController.edit);
router.put("/post/:id/update", postsController.update, postsController.redirectView);
router.delete("/posts/:id/delete", postsController.delete, postsController.redirectView);


router.get("/users", usersController.getAllUsers);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.validate, usersController.create, usersController.redirectView);

router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate);
router.get("/users/logout", usersController.logout, usersController.redirectView);

router.get("/signin",homeController.getSignin);
router.get("/signup", usersController.getUsersPage);
router.post("/user",usersController.saveUser);



router.use(errorController.pageNotFoundError);
router.use(errorController.interalServerError);

app.use("/", router);

app.listen(app.get("port"), () =>{
    console.log(`Server is running on port: ${app.get("port")}`)

});