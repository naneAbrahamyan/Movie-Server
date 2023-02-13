import express from 'express';
import { addGenresFromApi , getGenres } from '../controller/genre.controller.js';
const router = express.Router();

router.get('/', getGenres);
router.post('/', addGenresFromApi)

export default router;