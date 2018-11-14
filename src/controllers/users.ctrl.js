const userParcels = require('../models/users.model');

const users = {};

users.getAll = async (req, res) => {
    const { id } = req.params;
    await userParcels.getUserParcels(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
};

module.exports = users;