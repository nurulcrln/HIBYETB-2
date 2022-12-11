/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable no-multi-assign */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import Reminder from '../models/Reminder.js';

export const index = async (req, res) => {
  const response = await Reminder.findOne({
    where: {
      id: '23',
    },
  });
  const date1 = new Date(response.tgl_mulai);
  const date2 = new Date(response.tgl_selesai);
  const tgl1 = date1.getDate();
  const tgl2 = date2.getDate();
  const month1 = date1.getMonth() + 1;
  const month2 = date2.getMonth() + 1;
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const mulai = `${tgl1} - ${month1} - ${year1}`;
  const selesai = `${tgl2} - ${month2} - ${year2}`;

  res.render('pages/reminder/index', {
    tgl_mulai: mulai,
    tgl_selesai: selesai,
    data: response,
  });
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
      id: '23',
    },
  });
  const date1 = new Date(rows.tgl_mulai);
  const date2 = new Date(rows.tgl_selesai);
  const tgl1 = date1.getDate();
  const tgl2 = date2.getDate();
  const month1 = date1.getMonth() + 1;
  const month2 = date2.getMonth() + 1;
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const mulai = `${tgl1}/${month1}/${year1}`;
  const selesai = `${tgl2}/${month2}/${year2}`;
  res.render('pages/reminder/update', {
    tgl_mulai: mulai,
    tgl_selesai: selesai,
    jam_pagi: rows.jam_pagi,
    ket_pagi: rows.ket_pagi,
    jam_siang: rows.jam_siang,
    ket_siang: rows.ket_siang,
    jam_malam: rows.jam_malam,
    ket_malam: rows.ket_malam,
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
export const createReminder = (req, res) => {
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
    Reminder.create({
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
    res.render('pages/reminder/index');
    res.status(201).json({ msg: 'Reminder Created Successfuly' });
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
  const { total_hari } = req.body;

  try {
    await Reminder.update({
      tgl_mulai,
      tgl_selesai,
      jam_pagi,
      ket_pagi,
      jam_siang,
      ket_siang,
      jam_malam,
      ket_malam,
      total_hari,
    }, {
      where: {
        id: req.params.id,
      },
    });
    res.render('pages/reminder/index');
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

// export const notifikasi = async () => {
//   //  Notification
//   function showAlert() {
//     const myText = 'Jangan lupa izinkan notifikasi dahulu ya sobat!';
//     alert(myText);
//   }
//   showAlert();

//   function showNotification() {
//     const notification = new Notification('HiByeTB - Hai Sobat! Waktunya Minum Obat :) ', {
//       body: 'Minum Obat Yuk',
//     });
//     notification.onclick = () => {
//       window.location.href = '/reminderpage';
//     };
//   }

//   if (Notification.permission === 'granted') {
//     showNotification();
//   } else if (Notification.permission !== 'denied') {
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         showNotification();
//       }
//     });
//   }
//   const data = await Reminder.findOne({
//     where: {
//       id: '23',
//     },
//   });
//   const dateNow = new Date();
//   // const next = new Date(tgl_selesai);
//   const pagi = new Date('2022-12-11 02:30:00');
//   const siang = data.jam_siang;
//   const malam = data.jam_malam;

//   h = dateNow.getHours();
//   m = set(dateNow.getMinutes());
//   s = set(dateNow.getSeconds());
//   now = `${h}:${m}:${s}`;

//   hp = pagi.getHours();
//   mp = set(pagi.getMinutes());
//   sp = set(pagi.getSeconds());
//   pagi2 = `${hp}:${mp}:${sp}`;
//   // now = dateNow.getTime();
//   console.log(`${now} - ${pagi2}`);
//   if (now === pagi2 || now === siang || now === malam) {
//     showNotification();
//   } else {
//     console.log('Gagal');
//   }
// };