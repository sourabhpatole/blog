const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted user");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("Not found");
    }
  } else {
    res.status(401).json("Delete only your account");
  }
});

//delete post
//get post
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...remain } = user._doc;
    res.status(200).json(remain);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
