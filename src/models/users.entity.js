import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const schema = new Schema(
  {
     email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
  },
  { collection: 'users' }
);

schema.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);
  }

  next();
});

export default mongoose.model("User", schema);



