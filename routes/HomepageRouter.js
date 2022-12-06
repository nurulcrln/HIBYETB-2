/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { index } from '../controllers/HomeController.js';

const router = express.Router();

router.get('/', index);

export default router;
