const express = require('express')
const router = express.Router();

// index
router.get('/', function(req, res) {
    res.send('Lista dei post');
});

// show
router.get('/:id', function(req, res) {
    res.send('Dettagli dei post ' + req.params.id);
});

// store
router.post('/', function(req, res) {
    res.send('Creazione dei post');
});

// update
router.put('/:id', function(req, res) {
    res.send('Aggiorna dei post ' + req.params.id);
});

// destry
router.delete('/:id', function(req, res) {
    res.send('Elimina dei post ' + req.params.id);
});
module.exports = router;
