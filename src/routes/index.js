const express = require('express');
const router = express.Router();

// import routes modules
const parcels = require('./parcels.route');
const users = require('./users.route');

router.all('/', (req, res) => {
    res.status(200).json({ message: 'welcome to my API' });
});
router.use('/api/v1/parcels', parcels);
router.use('/api/v1/users', users);

module.exports = router;