const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SessionsControllerSecretary = require('../controller/SessionsControllerSecretary');

const sessionsSecretaryRoutes = Router();

const sessionsControllerSecretary = new SessionsControllerSecretary();

sessionsSecretaryRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
      password: Joi.string().min(6).required('Password is required'),
    },
  }),
  sessionsControllerSecretary.login
);

module.exports = sessionsSecretaryRoutes;
