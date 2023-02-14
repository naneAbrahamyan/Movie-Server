import express from 'express';
import {signUp, allUsers, login, getUser}  from '../controller/users.controller.js';

const router = express.Router();

router.get('/', allUsers);
router.post('/', signUp);
router.get('/login', login);
router.get('/user', getUser);

export default router;
