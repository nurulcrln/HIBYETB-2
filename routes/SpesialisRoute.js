/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import {
  index,
  create,
  getSpesialis,
  getSpesialisById,
  createSpesialis,
  updateSpesialis,
  deleteSpesialis,
  editSpesialis,
} from '../controllers/SpesialisController.js';

const router = express.Router();
router.get('/spesialispage', index); // mendapatkan halaman spesialis/index.ejs
router.get('/createspesialis', create); // mendapatkan halaman spesialis/create.ejs
router.get('/deletespesialis/:id', deleteSpesialis); // menghapus data melalui web
router.get('/editspesialis/:id', editSpesialis); // mendapatkan halaman spesialis/update.ejs
router.get('/spesialis', getSpesialis); // mendapatkan semua data
router.get('/spesialis/:id', getSpesialisById); // mendapatkan data berdasarkan id
router.post('/spesialis', createSpesialis); // menambahkan data melalui web dan api
router.post('/updatespesialis/:id', updateSpesialis); // mengupdate data melalui web
router.put('/spesialis/:id', updateSpesialis); // method-put mngupdate data melalui postman atau api
router.delete('/spesialis/:id', deleteSpesialis); // method-delete menghapus data melalui postman atau api

export default router;
