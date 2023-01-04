const { Router } = require('express');

const FamilyController = require('../controller/FamilyController');

const familyRoutes = Router();

const familyController = new FamilyController();

familyRoutes.get('/', familyController.getAllFamily);

familyRoutes.post('/', familyController.createFamily);

familyRoutes.put('/', familyController.updateFamily);

familyRoutes.delete('/', familyController.deleteFamily);

module.exports = familyRoutes;