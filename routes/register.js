const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("otherlayouts/register", {});
})

router.post("/", (req, res) => {
 res.send("registe success!"); // should put the users info to out database!
})

module.exports = router;
