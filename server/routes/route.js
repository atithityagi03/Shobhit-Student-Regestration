import express from 'express';
import { addUser } from '../controller/user_controller.js';

const router = express.Router();


router.post('/add', addUser);

export default router;