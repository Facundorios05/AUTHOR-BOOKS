import Genre from "../models/Genre.js";

export const getGenres = async (req, res) => {
  const genre = await Genre.find();

  try {
    if (!genre) {
      return res.status(404).json;
    }

    res.status(200).json(genre);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Error al obtener los generos" });
  }
};
