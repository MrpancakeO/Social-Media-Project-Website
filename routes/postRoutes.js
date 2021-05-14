const router = require("express").Router(),
  postsController = require("../controllers/postsController");

//Posts
router.post("/post",postsController.create, postsController.redirectView, postsController.index);
router.get("/",postsController.index,postsController.indexView)
router.get("/new", postsController.new);
router.get("/:id", postsController.show, postsController.showView);
router.get("/:id/edit", postsController.edit);
router.put("/:id/update", postsController.update, postsController.redirectView);
router.delete("/:id/delete", postsController.delete, postsController.redirectView);

module.exports=router;