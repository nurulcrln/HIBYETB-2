/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { login } from '../controllers/LoginController.js';

const router = express.Router();

router.get('/login', login);

export default router;
