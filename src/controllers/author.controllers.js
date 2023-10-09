//Importacion del modelo del author
import Author from "../models/Author.js";

//Logica para crear autor
export const createAuthor = async (req, res) => {
  try {
    const { name, surname, biography } = req.body;
    const newAuthor = new Author({ name, surname, biography });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el autor" });
  }
};

//Logica para obtener todos los autores
export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener los autores" });
  }
};

//Logica para obtener un author por id
export const getAuthorId = async (req, res) => {
  try {
    const {id} = req.params;
    const author = await Author.findById(id);
    if (!author) {
      res.status(404).json({ error: "El autor no existe" });
    }
    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el autor" });
  }
};

//Lógica para actualizar un autor
export const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, surname, biography } = req.body;

  try {
    const author = await Author.findByIdAndUpdate(id, {
      name,
      surname,
      biography,
    }, {
      new: true
    });
    if (!author) {
      res.status(404).json({ error: "El autor no existe" });
    }
    res.json(author);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el autor" });
  }
};

//Logica para eliminar un autor
export const deleteAuthor = async (req, res) => {
  try {
    const { name, surname, biography } = req.body;
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id, {
      name,
      surname,
      biography,
    });
    if (!deletedAuthor) {
      res.status(404).json({ error: "El autor no existe" });
    }
    res.status(200).json({ message: "Autor eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el autor" });
  }
};
