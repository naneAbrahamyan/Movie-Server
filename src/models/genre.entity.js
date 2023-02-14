import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    _id: Number,
    name: String,
  },

  { collection: "genres",  _id: false }
);

export default mongoose.model("Genre", schema);
