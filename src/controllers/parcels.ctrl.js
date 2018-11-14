const parcelModel = require('../models/parcels.model');

let parcels = {};

parcels.getAll = async (req, res) => {
    await parcelModel.getAllParcels()
    .then(data => res.json(data))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message });
        }
    });
};

parcels.getOne = async (req, res) => {
    const id = req.params.id;
    await parcelModel.getOneParcel(id)
    .then(data => res.json(data))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message });
        }
    });
};

parcels.addItem = async (req, res) => {
    await parcelModel.insertParcel(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: err.message }));
};

module.exports = parcels