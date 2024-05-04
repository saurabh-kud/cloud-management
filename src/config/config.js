const dotenv = require("dotenv");
const { username, password, database, host } = require(".");
dotenv.config({ path: "config.env" });
module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: "mysql",
  },
};
