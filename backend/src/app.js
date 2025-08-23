const express = require("express");
const app = express();
const multer = require("multer");
const uploadFile = require("./services/Post.services");
const postModel = require("./models/post.model");
const cors = require("cors");
const path = require("path");
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.post("/api/posts", upload.single("file"), async (req, res) => {
  try {
    const file = req.file.buffer;
    const result = await uploadFile(file, "file");
    const post = await postModel.create({
      caption: req.body.caption,
      url: result.url,
    });
    res.json({
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const post = await postModel.find();
    res.json({
      message: "Post get successfully",
      post,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
