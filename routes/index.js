const router = require("express").Router(),
userRoutes = require("./userRoutes"),
postRoutes= require("./postRoutes");
errorRoutes=require("./errorRoutes"),
homeRoutes=require("./homeRoutes");

router.use("/users",userRoutes);
router.use("/posts",postRoutes);
router.use("/", homeRoutes);
router.use("/",errorRoutes);

module.exports=router;