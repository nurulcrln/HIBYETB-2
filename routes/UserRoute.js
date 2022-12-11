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
  loginProcess,
  loginProtected,
  // isLogout,
  logout,
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/createregister', createUser);
router.post('/login', loginProcess);
// router.get('/login', login);
// router.get('/register', create);
router.get('/protected', loginProtected);
router.get('/register', create);
router.get('/login', login);
router.get('/logout', logout);
export default router;
