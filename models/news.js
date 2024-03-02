import mongoose from "mongoose";
const { Schema } = mongoose;
const newsSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true
  }
);

export default mongoose.models.news || mongoose.model("news", newsSchema);




