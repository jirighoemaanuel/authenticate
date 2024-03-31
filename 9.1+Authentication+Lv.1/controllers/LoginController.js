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
  const user = await getUser(userData);
  if (!user) {
    return res.redirect('login');
  }

  res.redirect('/secrets',);
};

export const secrets = (req, res) => {
  res.render('secrets.ejs');
};
