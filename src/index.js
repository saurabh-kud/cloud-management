const bodyParser = require("body-parser");
const express = require("express");

const PORT = process.env.PORT || 3000;
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
const StartServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(allowCrossDomain);

  app.get("/", (req, res) => {
    res.send({
      message: "server working fine 🚀🚀",
      docs: "https://documenter.getpostman.com/view/25265039/2sA3JGe3ME",
    });
  });

  app.use("/api", require("./routes"));

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT} 🚀🚀`);
  });
};

StartServer();
