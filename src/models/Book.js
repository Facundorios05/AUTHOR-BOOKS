// models/book.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    coverImage: { // Agregamos la propiedad para la imagen de portada
      type: String, // Aquí asumimos que la imagen se almacenará como una URL
      required: false, // Cambiamos a false si la imagen es opcional
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
