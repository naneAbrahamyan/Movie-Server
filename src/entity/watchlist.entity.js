import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, ref: "Movies" },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
  },

  { collection: "watchlist" }
);

schema.index({ 'movie_id': 1, 'user_id': 1}, { unique: true });

export default mongoose.model("Watchlist", schema);
