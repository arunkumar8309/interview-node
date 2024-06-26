const express = require("express");
const router = express.Router();

const myController = require("./../Controller/myController");

router.post("/postendpoint", myController.myPostMethod);

module.exports = router;
