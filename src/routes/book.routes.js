// Controllers importations
import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook
} from '../controllers/book.controllers.js';

const router = Router();


router.post('/books', createBook);
router.delete('/books/:id', deleteBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById)
router.put('/books/:id', updateBook)

export default router;
