const express = require("express");
const router = express.Router();

const myController = require("./../Controller/myController");

router.post("/newUser", myController.myPostMethod);

module.exports = router;
