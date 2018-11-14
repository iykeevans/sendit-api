const db = require('../database/database.json');
const helper = require('../validations/helper');

function getUserParcels(id) {
    return new Promise((resolve, reject) => {
        // check if object with id exists
        helper.checkUserExist(db, id)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}

module.exports = { getUserParcels };