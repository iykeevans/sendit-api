const express = require('express');
const router = express.Router();
const users = require('../controllers/users.ctrl');

router.get('/:id/parcels', users.getAll);

module.exports = router; 