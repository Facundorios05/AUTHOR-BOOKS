//Importaciones basicas
import express from 'express';
import databaseConnection from '../src/database/db.js';
import fileUpload from 'express-fileupload';

//Importaciones de las rutas
import authorRoutes from '../src/routes/author.routes.js'

const app = express();

//Inicialización
app.use(express.json());
app.use(fileUpload());

//inicializacion de la base de datos
databaseConnection();

//Inicializacion de las rutas
app.use(authorRoutes);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});