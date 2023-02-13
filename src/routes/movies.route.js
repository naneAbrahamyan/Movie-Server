import express from 'express';
import { getMovies, addMovie, addMoviesFromApi, filter} from '../controller/movies.controller.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.post('/add-api', addMoviesFromApi);
router.post('/filter', filter);


export default router;