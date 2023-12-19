import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import isAuth from '../../middlewares/isAuth.js';

export const viewUser = Router();

viewUser.get(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  isAuth(),
  // @todo: Ver información del usuario actual según la sesión del token JWT
  async (request, response) => {
    return response.status(200).json({
      //
    });
  }
);
