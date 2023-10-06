//Importations
import express from 'express';
import databaseConnection from '../src/database/db.js';
import fileUpload from 'express-fileupload';

const app = express();

//Inicializaation
app.use(express.json());
app.use(fileUpload());

databaseConnection();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});