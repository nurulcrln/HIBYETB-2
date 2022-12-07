import express from 'express';
// eslint-disable-next-line import/extensions
import { idokter } from '../controllers/DoktersController.js';

const router = express.Router();

router.get('/dokters', idokter);

export default router;