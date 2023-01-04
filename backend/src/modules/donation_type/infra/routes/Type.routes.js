const { Router } = require('express')

const TypeController = require('../controller/TypeController');

const typeRoutes = Router();

const typeController = new TypeController();

typeRoutes.get('/', typeController.getAllType);

typeRoutes.post('/', typeController.createType);

typeRoutes.put('/', typeController.updateType);

typeRoutes.delete('/', typeController.deleteType);

module.exports = typeRoutes;