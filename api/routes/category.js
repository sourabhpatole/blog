const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCate = new Category(req.body);
  try {
    const savedCate = await newCate.save();
    res.status(200).json(savedCate);
  } catch (error) {
    res.status(500).json(error);
  }
});
// fetch all category
router.get("/", async (req, res) => {
  try {
    const cate = await Category.find();
    res.status(200).json(cate);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
