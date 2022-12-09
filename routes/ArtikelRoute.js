/* eslint-disable no-trailing-spaces */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import express from 'express';
import {
  index,
  create,
  editArtikel,
  getArtikel,
  getArtikelById,
  createArtikel,
  updateArtikel,
  deleteArtikel,
  userArtikel,
} from '../controllers/ArtikelController.js';

const router = express.Router();
router.get('/artikelpage', index); 
router.get('/createartikel', create); 
router.get('/deleteartikel/:id', deleteArtikel); 
router.get('/editartikel/:id', editArtikel); 
router.get('/userartikel/:id', userArtikel); 

router.get('/artikel', getArtikel);
router.get('/artikel/:id', getArtikelById);
router.post('/artikel', createArtikel);
router.post('/updateartikel/:id', updateArtikel);
router.put('/artikel/:id', updateArtikel);
router.delete('/artikel/:id', deleteArtikel);

export default router;
