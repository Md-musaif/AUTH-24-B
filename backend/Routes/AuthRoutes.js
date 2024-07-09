const { signup, login } = require("../Controllers/Signup");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/Validation");

const router = require("express").Router();

// router.post("/login", (req, res) => {
//   res.send("login Success");
// });

router.post("/login", loginValidation, login);

router.post("/Signup", signupValidation, signup);

module.exports = router;
