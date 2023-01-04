const { Router } = require('express')

const AssistedController = require('../controller/AssistedController')

const assistedRoutes = Router ()

const assistedController = new AssistedController()

assistedRoutes.get('/', assistedController.getAllAssisted)

assistedRoutes.post('/', assistedController.createAssisted)

assistedRoutes.put('/', assistedController.updateAssisted)

assistedRoutes.delete('/', assistedController.deleteAssisted)

module.exports = assistedRoutes;