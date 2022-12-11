/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import { isLoginHandler } from '../middlewares/isLoginHandler.js';
import {
  index,
  create,
  getReminder,
  getReminderById,
  createReminder,
  updateReminder,
  deleteReminder,
  update,
} from '../controllers/ReminderController.js';

const router = express.Router();

router.get('/createreminder', isLoginHandler, create);
router.get('/updatereminder', isLoginHandler, update);
router.get('/reminder', getReminder);
router.get('/reminder/:id', getReminderById);
router.post('/reminder', createReminder);
router.put('/reminder/:id', updateReminder);
router.post('/reminder/:id', updateReminder);
router.delete('/reminder/:id', deleteReminder);
router.get('/reminderpage', isLoginHandler, index);

export default router;
