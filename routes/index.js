var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const UserInstance = new UserController();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/users/:user", (req, res, next) => {
  UserInstance.getUser(req, res);
});

module.exports = router;
