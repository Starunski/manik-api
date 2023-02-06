// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   password: "1234",
//   host: "localhost",
//   port: 5432,
//   database: "node_postgres",
// });
//
// module.exports = pool;

//TODO!!!!
///https://www.youtube.com/watch?v=Dm0CmZz-QyI&ab_channel=Classsed
const knex = require("knex");

module.exports = knex({
  client: "postgres",
  connection: {
    host: "db",
    user: "postgres",
    password: "1234",
    database: "node_postgres",
    port: 4321
  }
});
