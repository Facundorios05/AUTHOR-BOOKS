// src/controllers/book.controllers.js
import Book from "../models/Book.js";
import Author from "../models/Author.js";

//Logica para obtener todos los libros
export const getBooks = async (req, res) => {
  const Books = await Book.find()
  res.json(Books)
}

// Logica para agregar un libro
export const createBook = async (req, res) => {

  const { title, genre, year, author } = req.body;
  try {
    
    const newBook = new Book({  
      title, 
      genre, 
      year,
      author
    });
    const bookAuthor = await Author.findById(author);
    bookAuthor.books.push(newBook._id)
    await bookAuthor.save();
    await newBook.save();
    res.status(201).json(newBook);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el libro" });
  }
};

// Logica para obtener la cantidad de libros por género
  
  // Logica para eliminar un libro por ID
export const deleteBook = async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
  
      if (!deletedBook) {
        res.status(404).json({ error: "El libro no existe" });
      } 
      res.status(200).json({ message: "Libro eliminado exitosamente" })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el libro" });
    }
  };
  