const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill the name"],
  },
  surname: {
    type: String,
    required: [true, "Fill the surname"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a VALID email"],
  },
  // address: {
  //   type: String,
  // },
  // phone: {
  //   type: String,
  //   required: true,
  // },
  password: {
    type: String,
    required: [true, "Provide the password"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please, confirm the password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "The passwords must be the same",
    },
  },
  role: {
    type: String,
    required: [true, "What is the role of your new user?"],
    enum: ["user", "teacher", "student", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
