const { Post } = require("../../model/postModel");

const deletePost = async (req, res) => {
  const { id } = req.params;

  console.log("Post id", id);
  try {
    const post = await Post.findByIdAndDelete({ _id: id });

    if (!post) {
      res.status(404).json(`Post with this ID:${id} not found`);
    }

    res.status(200).json({ message: "Post deleted", post });
  } catch (error) {
    console.log("Error updating post", error);
  }
};

module.exports = {
  deletePost,
};
