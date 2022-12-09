/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { dashboard } from '../controllers/DashboardController.js';

const router = express.Router();

router.get('/dashboard', dashboard);

export default router;
