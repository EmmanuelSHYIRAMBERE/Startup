const { Post } = require("../../model/postModel");

const updatePost = async (req, res) => {
  const { id } = req.params;

  console.log("Post id", id);
  try {
    const post = await Post.findById({ _id: id });

    if (!post) {
      res.status(404).json(`Post with this ID:${id} not found`);
    }

    await Post.findByIdAndUpdate({ _id: id }, req.body);

    const updatedPost = await Post.findById({ _id: id });

    res.status(200).json({ message: "Post updated", updatedPost });
  } catch (error) {
    console.log("Error updating post", error);
  }
};

module.exports = {
  updatePost,
};
