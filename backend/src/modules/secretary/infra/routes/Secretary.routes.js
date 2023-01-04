const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SecretaryController = require('../controller/SecretaryController');

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
  secretaryController.createSecretary
);

secretaryRoutes.get('/', secretaryController.getAllSecretary);

secretaryRoutes.put('/', secretaryController.updateSecretary);

secretaryRoutes.delete('/', secretaryController.deleteSecretary);

module.exports = secretaryRoutes;
