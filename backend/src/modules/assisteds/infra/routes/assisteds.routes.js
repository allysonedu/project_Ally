const { Router } = require('express');

const AssistedsController = require('../controllers/AssistedsController');

const assistedsRoutes = Router();

const assistedsController = new AssistedsController();

assistedsRoutes.post('/', assistedsController.createAssisteds);

assistedsRoutes.put('/:id', assistedsController.updateAssisteds);

assistedsRoutes.delete('/', assistedsController.deleteAssisteds);

assistedsRoutes.get('/', assistedsController.getAllAssisteds);

assistedsRoutes.get('/:id', assistedsController.getOneAssisteds);

module.exports = assistedsRoutes;
