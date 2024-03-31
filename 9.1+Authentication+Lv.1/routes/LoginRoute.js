import express from 'express';

import {
  home,
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  secrets
} from '../controllers/LoginController.js';

const router = express.Router();
router.get('/', home);

router
  .get('/login', getLogin)
  .get('/register', getRegister)
  .get('/secrets', secrets);

router.post('/login', postLogin).post('/register', postRegister);

export default router;
