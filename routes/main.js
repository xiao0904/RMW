const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if(req.cookies.AuthCookie) {
  res.render("otherlayouts/mainpage", {});
  }
  else 
  res.send("You have to login first!");
})


module.exports = router;
