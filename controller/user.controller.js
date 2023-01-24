const db = require("../db");

class UserController {
  async getOneUser(req, res) {
    const { id } = req.params;
    const user = await db.query("SELECT * FROM person WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async createUser(req, res) {
    const { name, surname } = req.body;
    const newPerson = await db.query(
      `INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING * `,
      [name, surname]
    );
    res.json(newPerson.rows[0]);
  }

  async updateUser(req, res) {
    console.log("req.body", req.body);
    const { name, surname, password, id, email } = req.body;
    const user = await db.query(
      "UPDATE person SET name = $1, surname = $2, password = $3, email = $5 WHERE id = $4 RETURNING *",
      [name, surname, password, id, email]
    );

    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await db.query("DELETE FROM person WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    res.json(users.rows);
  }
}

module.exports = new UserController();
