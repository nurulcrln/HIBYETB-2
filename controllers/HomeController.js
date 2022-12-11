/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
// import Artikel from '../models/Artikel';

export const index = async (req, res) => {
  res.render('pages/homepage/home');
};
export const about = async (req, res) => {
  res.render('pages/about/about');
};
// export const index = async (req, res) => {
//   const rows = await Artikel.findAll();
//   res.render('pages/homepage/home', { data: rows });
// };
