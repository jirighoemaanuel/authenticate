import { createUser, getUser } from '../models/userModel.js';

export const home = (req, res) => {
  res.render('home.ejs');
};

export const getLogin = (req, res) => {
  res.render('login.ejs');
};

export const getRegister = (req, res) => {
  res.render('register.ejs');
};

export const postRegister = async (req, res) => {
  const userData = req.body;
  try {
    const user = await createUser(userData);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  res.redirect('/login');
};

export const postLogin = async (req, res) => {
  const userData = req.body;
  const user = await getUser(userData.username);
  if (!user) {
    return res.redirect('login');
  }
  if (user.password == userData.password) {
    return res.render('secrets.ejs');
  }
};

export const secrets = (req, res) => {
  res.render('secrets.ejs');
};
