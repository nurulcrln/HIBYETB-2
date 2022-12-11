/* eslint-disable object-shorthand */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
// import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import express from 'express';
import User from '../models/User.js';

const app = express();
export const profile = async (req, res) => {
  res.render('pages/user/user');
};

export const login = async (req, res) => {
  res.render('pages/login/login', { message: '' });
};
const generateAuthToken = () => crypto.randomBytes(30).toString('hex');
const authTokens = {};
const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
};

// export const isLogin = async (req, res, next) => {
//   if (req.session.loggedin === true) {
//     next();
//   } else {
//     req.session.destroy((err) => {
//       err.res.redirect('/login');
//     });
//   }
// };
// export const isLogout = async (req, res, next) => {
//   if (req.session.loggedin !== true) {
//     next();
//     return;
//   }
//   res.redirect('/');
// };
export const logout = async (req, res) => {
  // Hapus sesi user dari broser
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    // Hapus cokie yang masih tertinggal
    res.clearCookie('secretname');
    res.redirect('/login');
  });
};
// export const loginAuth = async (req, res) => {
//   const { email } = req.body;
//   const { password } = req.body;
//   const hashedPassword = getHashedPassword(password);
//   if (email && password) {
//     const user = User.findOne({
//       where: {
//         email: req.body.email,
//         password: hashedPassword,
//       },
//     });
//     if (user) {
//       req.session.loggedin = true;
//       req.session.userid = user.id;
//       req.session.username = user.username;
//       res.redirect('/');
//     } else {
//       res.render('pages/register/register', {
//         message: 'Belum register',
//         messageClass: 'alert-danger',
//       });
//     }
//   } else {
//     res.redirect('/login');
//     res.end();
//   }
// };

export const loginProcess = async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const rows = User.findAll();
  const user = () => {
    if (rows.email === email && hashedPassword === rows.password) {
      return true;
    }
  };

  if (user()) {
    const authToken = generateAuthToken();

    // Store authentication token
    authTokens[authToken] = user;

    // Setting the auth token in cookies
    res.cookie('AuthToken', authToken);

    // Redirect user to the protected page
    res.redirect('/');
  } else {
    res.render('pages/login/login', {
      message: 'Invalid username or password',
      messageClass: 'alert-danger',
    });
  }
};
// export const register = async (req, res) => {
//   res.render('pages/register/register');
// };
app.use((req, res, next) => {
  // Get auth token from the cookies
  const authToken = req.cookies.AuthToken;

  // Inject the user to the request
  req.user = authTokens[authToken];

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
  if (username === null) return res.status(400).json({ msg: 'Nama kosong' });
  if (email === null) return res.status(400).json({ msg: 'Email kosong' });
  if (password === null) return res.status(400).json({ msg: 'Password kosong' });

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
    }
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
