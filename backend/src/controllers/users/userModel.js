import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (
  userPassword
) {
  const user = this;
  return new Promise(async (resolve, reject) => {
    const isMatch = await bcrypt.compare(
      userPassword,
      user.password
    );
    if (isMatch) {
      resolve();
      return;
    }
    reject("password error");
  });
};

export default mongoose.model("User", userSchema);
