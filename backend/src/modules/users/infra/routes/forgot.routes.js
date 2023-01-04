const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controller/UsersController');

const forgotRoutes = Router();

const usersController = new UsersController();

forgotRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
    },
  }),
  usersController.forgotPassword
);

module.exports = forgotRoutes;

