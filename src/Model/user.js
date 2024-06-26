const mongooes = require("mongoose");

const useSchema = new mongooes.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongooes.model("User", useSchema, "User");

module.exports = User;
