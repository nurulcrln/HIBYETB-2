/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
// import flash from 'flash';
// import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

// import expressLayouts from 'express-ejs-layouts';
import SpesialisRoute from './routes/SpesialisRoute.js';
import UserRoute from './routes/UserRoute.js';
import DokterRoute from './routes/DokterRoute.js';
import ArtikelRoute from './routes/ArtikelRoute.js';
import ReminderRoute from './routes/ReminderRoute.js';
import HomepageRoute from './routes/HomepageRoute.js';
import DashboardRoute from './routes/DashboardRoute.js';
import ProfileRoute from './routes/ProfileRoute.js';
// import { notifikasi } from './controllers/ReminderController.js';

const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'hibyetb',
  name: 'secretName',
  cookie: {
    sameSite: true,
  },
}));
app.use(bodyParser.json());

// To parse cookies from the HTTP Request
app.use(cookieParser());

// set view engine
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));
app.use(SpesialisRoute);
app.use(UserRoute);
app.use(DokterRoute);
app.use(ArtikelRoute);
app.use(ReminderRoute);
app.use(HomepageRoute);
app.use(DashboardRoute);
app.use(ProfileRoute);

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.listen(5000, () => console.log('Server Up and Running...'));
