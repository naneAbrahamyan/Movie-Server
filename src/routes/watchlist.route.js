import express from 'express';
import { getWatchList, addToWatchList, deleteFromWatchList, filter } from '../controller/wathlist.controller.js';
const router = express.Router();

router.get('/', getWatchList);
router.post('/filter', filter)
router.post('/:id',addToWatchList);
router.delete('/:id', deleteFromWatchList)


export default router;