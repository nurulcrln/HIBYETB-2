/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { isLoginHandler } from '../middlewares/isLoginHandler.js';
import { profile } from '../controllers/UserController.js';

const router = express.Router();

router.get('/profile', isLoginHandler, profile);

export default router;