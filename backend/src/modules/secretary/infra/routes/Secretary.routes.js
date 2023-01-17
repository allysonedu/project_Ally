const { Router } = require('express');

const multer = require('multer');

const { celebrate, Segments, Joi } = require('celebrate');

const SecretaryController = require('../controller/SecretaryController');

const {
  verifyIfEmailAlreadyExists,
} = require('../../middlewares/secretary.middleware');

const ensureAuthenticated = require('../../middlewares/ensure.authenticated');

const uploadConfig = require('../../../../config/upload');

const upload = multer(uploadConfig);

const secretaryRoutes = Router();

const secretaryController = new SecretaryController();

secretaryRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      email: Joi.string().email().required('Email is required'),
      password: Joi.string().min(6).required('Password is required'),
    },
  }),
  verifyIfEmailAlreadyExists,
  secretaryController.createSecretary
);

secretaryRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  secretaryController.updateUserAvatar
);

module.exports = secretaryRoutes;
