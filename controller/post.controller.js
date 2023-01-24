const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_Id) VALUES ($1, $2, $3) RETURNING * `,
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  //fix that
  async deletePost(req, res) {
    const { id } = req.query;
    console.log("id", id);
    const post = await db.query("DELETE FROM post WHERE id = $1", [id]);
    res.json(post.rows[0]);
  }

  async getPosts(req, res) {
    const posts = await db.query("SELECT * FROM post ");
    res.json(posts.rows);
  }

  async getPostsByUser(req, res) {
    const { id } = req.query;
    console.log("id", id);
    const posts = await db.query("SELECT FROM post WHERE user_id = $1", [id]);
    console.log("posts", posts);
    res.json(posts);
  }
}

module.exports = new PostController();
