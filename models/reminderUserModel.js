/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  nik: DataTypes.INTEGER,
  age: DataTypes.INTEGER,
  phone: DataTypes.INTEGER,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
}, {
  freezeTableName: true,
});

const Reminder = db.define('reminder', {
  user_id: DataTypes.INTEGER,
  tgl_mulai: DataTypes.DATE,
  tgl_selesai: DataTypes.DATE,
  jam_pagi: DataTypes.TIME,
  ket_pagi: DataTypes.STRING,
  jam_siang: DataTypes.TIME,
  ket_siang: DataTypes.STRING,
  jam_malam: DataTypes.TIME,
  ket_malam: DataTypes.STRING,
  total_hari: DataTypes.INTEGER,
}, {
  freezeTableName: true,
});

(async () => {
  await db.sync();
})();

User.hasOne(Reminder, {
  foreignKey: 'user_id',
  as: 'reminder',
});

// Reminder.belongsTo(User, {
//   foreignKey: 'id',
//   as: 'users',
// });
Reminder.belongsTo(User, {
  foreignKey: 'id',
  as: 'users',
});
export { User, Reminder };
