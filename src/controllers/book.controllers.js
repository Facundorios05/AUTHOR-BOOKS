// src/controllers/book.controllers.js
import Book from "../models/Book.js";

// Logica para agregar un libro
export const createBook = async (req, res) => {
  try {
    const { title, genre, year, authorId } = req.body;
    // Obtén la imagen de portada del libro
    const coverImage = req.files.coverImage; 

    const coverImagePath = `/uploads/${coverImage.name}`;
    coverImage.mv(`./public${coverImagePath}`);

    
    const newBook = new Book({ title, genre, year, author: authorId, coverImage: coverImagePath });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el libro" });
  }
};

// Logica para obtener la cantidad de libros por género
export const getBooksByGenre = async (req, res) => {
    try {
      const booksByGenre = await Book.aggregate([
        {
          $group: {
            _id: "$genre",
            count: { $sum: 1 },
          },
        },
      ]);
  
      res.status(200).json(booksByGenre);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener libros por género" });
    }
  };
  
  // Logica para eliminar un libro por ID
export const deleteBook = async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
  
      if (!deletedBook) {
        res.status(404).json({ error: "El libro no existe" });
      } else {
        res.status(200).json({ message: "Libro eliminado exitosamente" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el libro" });
    }
  };
  