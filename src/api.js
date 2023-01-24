const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const userRouter = require("../routes/user.routes");
const postRouter = require("../routes/post.routes");

router.get("/", (req, res) => {
  res.json({ users: ["tobi", "loki", "jane"] });
});

console.log("router", router);
// app.use(express.json());
// app.use("/.netlify/functions/api", postRouter);
// app.listen(5000, () => {
//   console.log("Example app listening on port 5000!");
// });

app.use("/.netlify/functions/api", router);

// app.get("/api", (req, res) => {
//   res.json({ users: ["tobi", "loki", "jane"] });
// });

// app.use(express.json());
// app.use("/.netlify/functions/api", userRouter);
// app.use("/.netlify/functions/api", postRouter);

module.exports.handler = serverless(app);
