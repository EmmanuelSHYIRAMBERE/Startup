const express = require("express");
const mongoose = require("mongoose");
const { postRouter } = require("./routers/postRouter");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db_connect = "mongodb://localhost:27017/Startup";

app.use(bodyParser.json());
app.use("/startup", postRouter);

mongoose
  .connect(db_connect)
  .then((res) => {
    console.log("MongoDB connected");
    app.listen(port, () =>
      console.log(`Express app listening on port http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });
