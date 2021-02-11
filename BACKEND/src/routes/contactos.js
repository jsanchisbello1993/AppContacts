const { Router } = require('express');
const { obtenerContactos, crearContacto, obtenerContacto, eliminarContacto, editarContacto } = require('../controllers/contactos.controller');
const router = Router();

const contactosController = require('../controllers/contactos.controller');

router.route('/')
    .get(obtenerContactos)
    .post(crearContacto);

router.route('/:id')
    .get(obtenerContacto)
    .delete(eliminarContacto)
    .put(editarContacto);

module.exports = router;