/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable no-multi-assign */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import { Reminder } from '../models/reminderUserModel.js';

export const index = async (req, res) => {
  const response = await Reminder.findOne({
    where: {
      user_id: req.session.userId,
    },
    raw: true,
  });
  console.log(response);
  if (response) {
    const date1 = new Date(response.tgl_mulai);
    const date2 = new Date(response.tgl_selesai);
    const tgl1 = date1.getDate();
    const tgl2 = date2.getDate();
    const month1 = date1.getMonth() + 1;
    const month2 = date2.getMonth() + 1;
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    const mulai = `${tgl1}-${month1}-${year1}`;
    const selesai = `${year2}-${month2}-${tgl2}`;
    console.log(mulai);
    res.render('pages/reminder/index', {
      tgl_mulai: mulai,
      tgl_selesai: selesai,
      data: response,
      message: req.session.userName,
    });
  } else {
    res.render('pages/reminder/index', {
      tgl_mulai: '0',
      tgl_selesai: '0',
      data: '0',
      message: 'Belum ada data nih, Silahkan Atur Reminder terlebih dahulu',
    });
  }
};

export const create = async (req, res) => {
  res.render('pages/reminder/create', {
    tgl_mulai: '',
    tgl_selesai: '',
    jam_pagi: '',
    ket_pagi: '',
    jam_siang: '',
    ket_siang: '',
    jam_malam: '',
    ket_malam: '',
  });
};

export const update = async (req, res) => {
  const rows = await Reminder.findOne({
    where: {
      user_id: req.session.userId,
    },
    raw: true,
  });
  const date1 = new Date(rows.tgl_mulai);
  const date2 = new Date(rows.tgl_selesai);
  const tgl1 = date1.getDate();
  const tgl2 = date2.getDate();
  const month1 = date1.getMonth() + 1;
  const month2 = date2.getMonth() + 1;
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const mulai = `${year1}-${month1}-${tgl1}`;
  const selesai = `${year2}-${month2}-${tgl2}`;
  res.render('pages/reminder/update', {
    tgl_mulai: mulai,
    tgl_selesai: selesai,
    jam_pagi: rows.jam_pagi,
    ket_pagi: rows.ket_pagi,
    jam_siang: rows.jam_siang,
    ket_siang: rows.ket_siang,
    jam_malam: rows.jam_malam,
    ket_malam: rows.ket_malam,
    id: rows.id,
  });
};

// Function untuk melihat semua data
export const getReminder = async (req, res) => {
  try {
    const response = await Reminder.findAll();
    res.render('pages/reminder/index');
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk melihat data berdasarkan ID
export const getReminderById = async (req, res) => {
  try {
    const response = await Reminder.findOne({
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
export const createReminder = async (req, res) => {
  const { tgl_mulai } = req.body;
  const { tgl_selesai } = req.body;
  const { jam_pagi } = req.body;
  const { ket_pagi } = req.body;
  const { jam_siang } = req.body;
  const { ket_siang } = req.body;
  const { jam_malam } = req.body;
  const { ket_malam } = req.body;
  // const { user_id } = req.session.userId;
  const totalHari = (date1, date2) => {
    const day1 = new Date(date1);
    const day2 = new Date(date2);
    const Difference_In_Time = day2.getTime() - day1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  };
  const jumlah = totalHari(tgl_mulai, tgl_selesai);

  try {
    await Reminder.create({
      user_id: req.session.userId,
      tgl_mulai,
      tgl_selesai,
      jam_pagi,
      ket_pagi,
      jam_siang,
      ket_siang,
      jam_malam,
      ket_malam,
      total_hari: jumlah,
    });
    res.redirect('/reminderpage');
    // res.status(201).json({ msg: 'Reminder Created Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk mengupdate data
export const updateReminder = async (req, res) => {
  const user = await Reminder.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: 'No Data Found' });

  const { tgl_mulai } = req.body;
  const { tgl_selesai } = req.body;
  const { jam_pagi } = req.body;
  const { ket_pagi } = req.body;
  const { jam_siang } = req.body;
  const { ket_siang } = req.body;
  const { jam_malam } = req.body;
  const { ket_malam } = req.body;
  const totalHari = (date1, date2) => {
    const day1 = new Date(date1);
    const day2 = new Date(date2);
    const Difference_In_Time = day2.getTime() - day1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  };
  const jumlah = totalHari(tgl_mulai, tgl_selesai);
  try {
    await Reminder.update({
      user_id: req.session.userId,
      tgl_mulai,
      tgl_selesai,
      jam_pagi,
      ket_pagi,
      jam_siang,
      ket_siang,
      jam_malam,
      ket_malam,
      total_hari: jumlah,
    }, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/reminderpage');
    res.status(200).json({ msg: 'Reminder Updated Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk menghapus data
export const deleteReminder = async (req, res) => {
  const user = await Reminder.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: 'No Data Found' });

  try {
    await Reminder.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Reminder Deleted Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
