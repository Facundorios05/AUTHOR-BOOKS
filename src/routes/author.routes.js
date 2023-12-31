//Controllers importations
import {Router} from "express";
import {
    createAuthor,
    getAuthors,
    getAuthorbyId,
    updateAuthor,
    deleteAuthor
} from '../controllers/author.controllers.js'

const router = Router();

router.post('/author', createAuthor);

router.get('/author', getAuthors);

router.get('/author/:id', getAuthorbyId);

router.put('/author/:id', updateAuthor);

router.delete('/author/:id', deleteAuthor);

export default router;
