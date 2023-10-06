import mongoose from "mongoose";

mongoose.set('strictQuery', false); //Mongoose me recomendo utilizar esto.

export const databaseConnection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/merndb");
    console.log("Database is connected!");
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnection