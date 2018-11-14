const express = require('express');
const router = express.Router();
const parcels = require('../controllers/parcels.ctrl');
const middleware = require('../validations/middleware')
const parcelModel = require('../models/parcels.model');

// gets all parcel delivery order
router.get('/', parcels.getAll);

router.get('/:id', parcels.getOne);

router.post('/', (req, res) => {
    res.json(parcelModel.insertParcel(req.body));
});

router.put('/:id/cancel', (req, res) => {
    const { id } = req.params;
    res.json(parcelModel.cancelParcel(id));
});

module.exports = router;