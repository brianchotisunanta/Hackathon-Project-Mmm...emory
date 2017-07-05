var express = require('express');
var router = express.Router();

var notesController = require('../controllers/notes-controller');

/* GET users listing. */
router.get('/', notesController.index);

//POST 
router.post('/:id', notesController.create);

//GET
router.get('/:id', notesController.show);

//PUT 
router.put('/:id/:id2', notesController.update);

//DELETE 
router.delete('/:id/:id2', notesController.destroy);

module.exports = router;
