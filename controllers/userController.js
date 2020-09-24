const User = require("./../models/userModel");

(exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
  }
}),
  (exports.addUser = async (req, res) => {
    try {
      console.log(req.body);
      const newUser = await User.create(req.body);

      res.status(200).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
      if (!err) {
        res.status(400).json({
          status: "fail",
          message: "Set a role",
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: err,
        });
      }
    }
  }),
  (exports.getSingleUser = (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Gets single User",
    });
    console.log(req.params);
  });

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User updated",
  });
  console.log(req.params);
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: null,
  });
};
