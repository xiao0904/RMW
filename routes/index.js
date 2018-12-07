const account = require("./account");

const constructorMethod = app => {
  app.use("/", account);

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
