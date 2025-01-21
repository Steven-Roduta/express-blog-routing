const express = require("express");
const router = express();
const port =3000;
const postsRouter = require('.router/post.js');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send('Welcome to my post')
})

app.use("/post", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port${port}`)
})