/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
import Spesialis from '../models/Spesialis.js';

// Function Render Views : spesialis/index.ejs
export const index = async (req, res) => {
  const rows = await Spesialis.findAll();
  res.render('pages/spesialis/index', { data: rows });
};
// Function Render Views : spesialis/create.ejs
export const create = async (req, res) => {
  res.render('pages/spesialis/create', { nama: '' });
};

// Function untuk melihat semua data
export const getSpesialis = async (req, res) => {
  try {
    const response = await Spesialis.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Function untuk melihat data berdasarkan ID
export const getSpesialisById = async (req, res) => {
  try {
    const response = await Spesialis.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Function untuk menambahkan data
export const createSpesialis = async (req, res) => {
  const nama = req.body.nama;
  if (nama === null) return res.status(400).json({ msg: 'Nama kosong' });
  const errors = false;

  try {
    await Spesialis.create({ nama });
    // if no error
    if (errors) {
      res.render('pages/spesialis/create', {
        nama: nama,
      });
    } else {
      res.redirect('/spesialispage');
    }
    res.status(201).json({ msg: 'Spesialis Created Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};

// Function Render Views : spesialis/update.ejs
export const editSpesialis = async (req, res) => {
  const id = req.params.id;

  const rows = await Spesialis.findOne({
    where: {
      id: id,
    },
  });
  res.render('pages/spesialis/update', {
    id: rows.id,
    nama: rows.nama,
  });
};

// Function untuk mengupdate data
export const updateSpesialis = async (req, res) => {
  const spesialis = await Spesialis.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!spesialis) return res.status(404).json({ msg: 'No Data Found' });
  const { nama } = req.body;
  const errors = false;

  try {
    await Spesialis.update({ nama }, {
      where: {
        id: req.params.id,
      },
    });
    // if no error
    if (errors) {
      res.render('pages/spesialis/update', {
        id: req.params.id,
        nama: nama,
      });
    } else {
      res.redirect('/spesialispage');
    }
    res.status(200).json({ msg: 'Spesialis Updated Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk menghapus data
export const deleteSpesialis = async (req, res) => {
  const spesialis = await Spesialis.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!spesialis) return res.status(404).json({ msg: 'No Data Found' });
  const errors = false;
  // if no error
  if (errors) {
    // redirect to halaman index.ejs
    res.redirect('/spesialispage');
  } else {
    // redirect to halaman index.ejs
    res.redirect('/spesialispage');
  }

  try {
    await Spesialis.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Spesialis Deleted Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
