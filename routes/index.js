const account = require("./account");
const main = require("./main");
const login = require("./login");

const constructorMethod = app => {
  
  app.use("/main", main)
  app.use("/login", login);
  app.use("/main/account", account);
  

  app.use("*", (req, res) => {
    res.redirect("/login");
  });
};

module.exports = constructorMethod;
