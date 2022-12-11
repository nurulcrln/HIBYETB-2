/* eslint-disable import/prefer-default-export */
export const isLoginHandler = (req, res, next) => {
  if (req.session.isLogin) {
    next();
  } else {
    res.redirect('/login');
  }
};