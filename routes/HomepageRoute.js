/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { index, about } from '../controllers/HomeController.js';

const router = express.Router();

router.get('/', index);
router.get('/about', about);
export default router;
