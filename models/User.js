/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
// import Reminder from './Reminder';

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

// User.associate = (models) => {
//   // associations can be defined here
//   User.hasOne(models.Reminder, {
//     foreignKey: 'user_id',
//     as: 'reminder',
//   });
// };
export default User;
// User.hasOne(Reminder, {
//   foreignKey: 'user_id',
//   as: 'reminder',
// });
(async () => {
  await db.sync();
})();
