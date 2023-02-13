import express from 'express';
import {signUp, allUsers, login}  from '../controller/users.controller.js';

const router = express.Router();

router.get('/', allUsers)
router.post('/', signUp)
router.get('/login', login)

export default router;
