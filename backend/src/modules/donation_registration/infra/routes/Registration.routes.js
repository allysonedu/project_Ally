const { Router } = require('express')

const RegistrationController = require('../controller/RegistrationController')

const registrationRoutes = Router ()

const registrationController = new RegistrationController()

registrationRoutes.get('/', registrationController.getAllRegistration)

registrationRoutes.post('/', registrationController.createRegistration)

registrationRoutes.put('/', registrationController.updateRegistration)

registrationRoutes.delete('/', registrationController.deleteRegistration)

module.exports = registrationRoutes

