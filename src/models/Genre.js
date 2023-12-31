import { Schema, model } from "mongoose";

const genreSchema = new Schema(
  {
    name: {
      type: String,      
      required: true,
      unique: true
    }    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Genre", genreSchema);

