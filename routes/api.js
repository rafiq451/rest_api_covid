// import express
const express = require('express');

// import controller
const PatientsController = require('../controller/ControllerPatients');

// memanggil express router
const router = express.Router();

// membuat routing
router.get('/patients', PatientsController.index);
router.post('/patients', PatientsController.store);
router.get('/patients/:id', PatientsController.show);
router.put('/patients/:id', PatientsController.update);
router.delete('/patients/:id', PatientsController.destroy);
router.get('/patients/search/:name', PatientsController.search);
router.get('/patients/status/positive', PatientsController.positive);
router.get('/patients/status/recovered', PatientsController.recovered);
router.get('/patients/status/dead', PatientsController.dead);

// export router
module.exports = router;
