// Importaciones básicas
import express from 'express';
import databaseConnection from '../src/database/db.js';
import fileUpload from 'express-fileupload';

// Importaciones de las rutas
import authorRoutes from '../src/routes/author.routes.js';
import bookRoutes from '../src/routes/book.routes.js'; // Añade esta importación

const app = express();

// Inicialización
app.use(express.json());
app.use(fileUpload()); // Configuración de express-fileupload

// Inicialización de la base de datos
databaseConnection();

// Inicialización de las rutas
app.use(authorRoutes);
app.use(bookRoutes); 

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
