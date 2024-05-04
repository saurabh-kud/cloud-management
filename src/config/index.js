require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
};
