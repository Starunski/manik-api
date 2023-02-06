const express = require("express");
const morgan = require('morgan')
const serverless = require("serverless-http");
const app = express();
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

app.get("/api", (req, res) => {
  res.json({users: ["tobi", "loki", "jane"]});
});

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

module.exports.handler = serverless(app);
