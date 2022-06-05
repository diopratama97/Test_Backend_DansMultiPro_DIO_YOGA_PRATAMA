const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "dansmultipro_test",
  },
});

module.exports = knex;
