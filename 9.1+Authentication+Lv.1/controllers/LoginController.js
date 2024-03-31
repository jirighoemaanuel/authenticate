

export const home = (req, res) => {
  res.render('home.ejs');
};

export const getLogin = (req, res) => {
  res.render('login.ejs');
};

export const getRegister = (req, res) => {
  res.render('register.ejs');
};

export const postRegister = async (req, res) => {};
export const postLogin = async (req, res) => {};
