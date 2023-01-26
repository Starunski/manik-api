const Router = require("express");
const router = new Router();
const postController = require("../controller/post.controller");

router.post("/post", postController.createPost);
// router.get("/user/:id", postController.getOneUser);
// router.get("/post", postController.getPosts);
// router.put("/user", postController.updateUser);
console.log("test");
router.get("/post", postController.getPostsByUser);
router.delete("/post", postController.deletePost);

module.exports = router;
