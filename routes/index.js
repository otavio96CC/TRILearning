const express = require('express');
const hipotenusaController = require('../controller/controllerHipotenusa');
const areaController = require('../controller/controllerArea');
const areaEquilateroController = require('../controller/controllerAreaEquilatero');
const perimetroController = require('../controller/controllerPerimetro');

const router = express.Router();

router.head('/', (request, response) => {
    response.sendStatus(200);
});
  
router.post('/hipotenusa', hipotenusaController);
router.post('/area', areaController);
router.post('/areaEquilatero', areaEquilateroController);
router.post('/perimetro', perimetroController);

module.exports = router;