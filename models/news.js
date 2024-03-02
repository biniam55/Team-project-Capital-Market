import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const news = mongoose.model("news", newsSchema);

export default news;