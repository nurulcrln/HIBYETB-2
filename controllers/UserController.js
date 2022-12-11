/* eslint-disable object-shorthand */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import express from 'express';
import { User } from '../models/reminderUserModel.js';

const app = express();
export const profile = async (req, res) => {
  res.render('pages/user/user');
};
// export const register = async (req, res) => {
//   res.render('pages/register/register', { message: '' });
// };
export const login = async (req, res) => {
  if (req.session.isLogin) {
    res.redirect('/reminder');
  }
  res.render('pages/login/login', { message: '' });
};

// export const logout = async (req, res) => {
//   res.render('pages/login/login', { message: '' });
//   req.session.destroy();
// };

// const generateAuthToken = () => crypto.randomBytes(30).toString('hex');
// const authTokens = {};
const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

export const checkCookies = async (req, res) => {
  const { email } = req.cookies;

  return res.render('pages/homepage/home', { email });
};

export const logoutProcess = async (req, res) => {
  res.clearCookie('secretName');
  // req.session.destroy();

  return res.redirect('/login');
};

export const loginProcess = async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  const hashedPassword = getHashedPassword(password);
  req.session.email = req.body.email;
  const rows = await User.findOne({
    where: {
      email: req.body.email,
      password: hashedPassword,
    },
    raw: true,
  });
  console.log(rows);
  // const user = () => {
  //   if (rows.email === email && hashedPassword === rows.password) {
  //     res.cookie('email', email);
  //     return true;
  //   }
  // };

  if (rows) {
    // const authToken = generateAuthToken();

    // Store authentication token
    // authTokens[authToken] = user;

    // Setting the auth token in cookies
    // res.cookie('AuthToken', authToken);

    // Redirect user to the protected page
    req.session.isLogin = true;
    req.session.userId = rows.id;
    req.session.userName = rows.username;
    res.redirect('/');
  } else {
    res.render('pages/login/login', {
      message: 'Invalid username or password',
      messageClass: 'alert-danger',
    });
  }
  res.end('done');
};
// export const register = async (req, res) => {
//   res.render('pages/register/register');
// };
app.use((req, res, next) => {
  // // Get auth token from the cookies
  // const authToken = req.cookies.AuthToken;

  // // Inject the user to the request
  // req.user = authTokens[authToken];

  next();
});

export const loginProtected = async (req, res) => {
  if (req.user) {
    res.render('pages/homepage/home');
  } else {
    res.render('pages/login/login', {
      message: 'Please login to continue',
      messageClass: 'alert-danger',
    });
  }
};

export const create = async (req, res) => {
  res.render('pages/register/register', {
    username: '',
    email: '',
    nik: '',
    age: '',
    phone: '',
    password: '',
    role: 'user',
    message: '',
  });
};

// Function untuk melihat semua data
export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk melihat data berdasarkan ID
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
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
export const createUser = (req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  const { nik } = req.body;
  const { age } = req.body;
  const { phone } = req.body;
  const { password } = req.body;
  const { confirmPassword } = req.body;
  const { role } = req.body;
  if (req.username === null) return res.status(400).json({ msg: 'Nama kosong' });
  if (req.email === null) return res.status(400).json({ msg: 'Email kosong' });
  if (req.password === null) return res.status(400).json({ msg: 'Password kosong' });

  if (password === confirmPassword) {
    const hashPassword = getHashedPassword(password);
    const user = User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.render('pages/register/register', {
        message: 'User already registered.',
        messageClass: 'alert-danger',
      });
    } else {
      try {
        User.create({
          username,
          email,
          nik,
          age,
          phone,
          password: hashPassword,
          role,
        });
        res.redirect('/login');
        res.status(201).json({ msg: 'User Created Successfuly' });
      } catch (error) {
        console.log(error.message);
      }
    }
  } else {
    res.render('pages/register/register', {
      message: 'Password does not match.',
      messageClass: 'alert-danger',
    });
  }
};
// Function untuk mengupdate data
export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: 'No Data Found' });

  const { username } = req.body;
  const { email } = req.body;
  const { nik } = req.body;
  const { age } = req.body;
  const { phone } = req.body;
  const { password } = req.body;
  const { role } = req.body;

  try {
    await User.update({
      username,
      email,
      nik,
      age,
      phone,
      password,
      role,
    }, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Updated Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
// Function untuk menghapus data
export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: 'No Data Found' });

  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User Deleted Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
