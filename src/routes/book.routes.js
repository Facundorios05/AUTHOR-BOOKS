// Controllers importations
import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBooks
} from '../controllers/book.controllers.js';

const router = Router();


router.post('/book', createBook);
router.delete('/book/:id', deleteBook);
router.get('/books', getBooks); // Ruta para agrupación por género

export default router;
