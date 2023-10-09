// models/author.js
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    biography: {
      type: String,
      required: true,
    },
    books:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
    }],
  },
  {
    timestamp: true,
  }
);

const Author = mongoose.model('Author', authorSchema);

export default Author;