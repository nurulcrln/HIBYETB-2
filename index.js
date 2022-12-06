/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
// import expressLayouts from 'express-ejs-layouts';
import SpesialisRoute from './routes/SpesialisRoute.js';
import UserRoute from './routes/UserRoute.js';
import DokterRoute from './routes/DokterRoute.js';
import ArtikelRoute from './routes/ArtikelRoute.js';
import ReminderRoute from './routes/ReminderRoute.js';
import HomepageRoute from './routes/HomepageRouter.js';

const app = express();

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

// app.get('/', (req, res) => {
//   res.render('pages/homepage/home');
// });

app.listen(5000, () => console.log('Server Up and Running...'));
