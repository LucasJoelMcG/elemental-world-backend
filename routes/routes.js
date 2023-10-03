const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.use(express.json());

router.post("/login",loginController.login);

module.exports = router;