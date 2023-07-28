import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  password: {
    type: String,
    required: [true],
  },
});

//static sign up method
userSchema.statics.signup = async function (email, password) {
  //validation

  if (!email || !password) {
    throw Error("all fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  // this instend of using User model, this like use current model
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //he we create salt, and hashing password with salt
  const user = await this.create({ email, password: hash });
  //here we create user,again this instend of userModel

  return user;
};
//static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("all fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);
  // if password match , then..
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

export default mongoose.model("User", userSchema);
