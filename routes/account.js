const usersData = require("../data/accountData");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let num = 100;
  for (let i = 0; i< 3; i++) {
    if(req.cookies.AuthCookie === usersData.accountAll[i].username){
     num = i;
    }
  }
  if (num != 100) {
    res.render("otherlayouts/account", {name: usersData.accountAll[num].username});
  }
  else 
  throw "somthing wrong";
});

module.exports = router;
