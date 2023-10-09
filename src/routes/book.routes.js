// Controllers importations
import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBooksByGenre, // Añadido para agrupación por género
} from '../controllers/book.controllers.js';

const router = Router();

router.post('/book', createBook);
router.delete('/book/:id', deleteBook);
router.get('/books/genres', getBooksByGenre); // Ruta para agrupación por género

export default router;