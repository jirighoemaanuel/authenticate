import express from 'express';

import {
  home,
  getLogin,
  getRegister,
  postLogin,
  postRegister,
} from '../controllers/LoginController.js';

const router = express.Router();
router.get('/', home);

router.get('/login', getLogin).get('/register', getRegister);

router.post('/login', postLogin).get('/register', postRegister);

export default router;
