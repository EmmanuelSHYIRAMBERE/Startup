const { Post } = require("../../model/postModel");

const addNewPost = async (req, res) => {
  try {
    const dataPosted = await Post.create(req.body);

    res.status(201).json({
      message: "data posted successfully",
      dataPosted,
    });
  } catch (error) {
    console.log("Error saving new post", error);
  }
};

module.exports = {
  addNewPost,
};
