const express = require("express");
const { addNewPost } = require("../controllers/Posts/addNewPost");
const { getPosts } = require("../controllers/Posts/getPosts");
const { updatePost } = require("../controllers/Posts/updatePost");
const { deletePost } = require("../controllers/Posts/deletePost");

const postRouter = express.Router();

postRouter.post("/addNewPost", addNewPost);
postRouter.get("/getPosts", getPosts);
postRouter.put("/updatePost/:id", updatePost);
postRouter.delete("/deletePost/:id", deletePost);

module.exports = {
  postRouter,
};
