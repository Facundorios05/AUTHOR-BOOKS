// src/controllers/book.controllers.js
import Book from "../models/Book.js";
import Author from "../models/Author.js";

//Logica para obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("genre", "name")
      .populate("author", "name");

    if (!books) {
      return res
        .status(404)
        .json({ message: "No existen libros para mostrar" });
    }

    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al mostrar los libros" });
  }
};

// Logica para agregar un libro
export const createBook = async (req, res) => {
  const { title, genre, year, author } = req.body;
  try {
    const newBook = new Book({
      title,
      genre,
      year,
      author,
    });
    const bookAuthor = await Author.findById(author);
    bookAuthor.books.push(newBook._id);
    await bookAuthor.save();
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el libro" });
  }
};

// Logica para obtener un libro por ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("genre", "name")
      .populate("author", "name");

    if (!book) {
      res.status(404).json({ error: "El libro no existe" });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al mostrar el libro" });
  }
};

// Logica para eliminar un libro por ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      res.status(404).json({ error: "El libro no existe" });
    }
    res.status(200).json({ message: "Libro eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};

// Logica para actualizar un libro por ID
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};
  