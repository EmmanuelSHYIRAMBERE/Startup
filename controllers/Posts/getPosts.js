const { Post } = require("../../model/postModel");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      message: "Success",
      posts,
    });
  } catch (error) {
    console.log("Error retrieving posts", error);
  }
};

module.exports = {
  getPosts,
};
