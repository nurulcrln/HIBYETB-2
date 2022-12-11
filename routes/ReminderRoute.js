/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import {
  index,
  create,
  getReminder,
  getReminderById,
  createReminder,
  updateReminder,
  deleteReminder,
  update,
  // notifikasi,
} from '../controllers/ReminderController.js';

const router = express.Router();
router.get('/createreminder', create);
router.get('/updatereminder', update);
// router.get('/reminderpage', index);
router.get('/reminder', getReminder);
router.get('/reminder/:id', getReminderById);
router.post('/reminder', createReminder);
router.put('/reminder/:id', updateReminder);
router.post('/reminder/:id', updateReminder);
router.delete('/reminder/:id', deleteReminder);
router.get('/reminderpage', index);
// router.get('/notifikasi', notifikasi);
export default router;
