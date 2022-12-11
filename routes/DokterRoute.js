/* eslint-disable indent */
/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import express from 'express';
import {
    idokter,
    listDokter,
    create,
    deleteDokter,
    editDokter,
    getDokter,
    getDokterById,
    createDokter,
    updateDokter,
} from '../controllers/DokterController.js';

const router = express.Router();
router.get('/dokterpage', idokter);
router.get('/list', listDokter);
router.get('/createdokter', create);
router.get('/deletedokter/:id', deleteDokter);
router.get('/editdokter/:id', editDokter);
router.get('/dokter', getDokter);
router.get('/dokter/:id', getDokterById);

router.post('/create', createDokter);
router.post('/updatedokter/:id', updateDokter);
router.put('/dokter/:id', updateDokter);
router.delete('/dokter/:id', deleteDokter);
export default router;