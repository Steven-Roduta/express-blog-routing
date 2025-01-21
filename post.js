const express = require("express");
const app = express();
const port =3000;
const postsRouter = require('./router/myblog');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send('Welcome to my post')
})

app.use("/post", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port${port}`)
})