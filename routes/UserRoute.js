/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  create,
  login,
  register,
  loginProcess,
  loginProtected,
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/register', create);
router.post('/login', loginProcess);
router.get('/login', login);
router.get('/register', register);
router.get('/protected', loginProtected);
export default router;
