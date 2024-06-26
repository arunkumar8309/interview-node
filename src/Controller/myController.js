const User = require("./../Model/user");

exports.myPostMethod = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      message: "User created Successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Creating user",
      error: error.message,
    });
  }
};
