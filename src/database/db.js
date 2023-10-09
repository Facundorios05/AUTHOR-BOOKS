import mongoose from "mongoose";

//Mongoose me recomendo utilizar esto.
mongoose.set('strictQuery', false); 

export const databaseConnection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Author-Books-db");
    console.log("La base de datos ha sido conectada!");
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnection;