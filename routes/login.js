const usersData = require("../data/accountData");

const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("otherlayouts/login", {});
})

router.post("/", (req, res) => {
  let num = 100;
  for (let i = 0; i< 3; i++) {
    if(req.body.username === usersData.accountAll[i].username & req.body.password === usersData.accountAll[i].password){
       num = i;
    }
  }
  if (num != 100) {
    res.cookie("AuthCookie", req.body.username);
    res.redirect("/main");
  }
  else 
  throw "wrong username or password"
})

module.exports = router;
