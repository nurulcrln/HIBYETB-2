/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { profile } from '../controllers/ProfileController.js';

const router = express.Router();

router.get('/profile', profile);

export default router;