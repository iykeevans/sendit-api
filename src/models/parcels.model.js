const db = require('../database/database.json');
const helper = require('../validations/helper');
function getAllParcels() {
    return new Promise((resolve, reject) => {
        if(db.length === 0) {
            reject({
                message: 'No data available',
                status: 202
            })
        }
        resolve(db);
    });
}

function getOneParcel(id) {
    return new Promise((resolve, reject) => {
        // check if object with id exists
        helper.checkItemExist(db, id)
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}

function insertParcel(newParcel) {
    const id = { id: 1 };
    const userId = { userId: 2 };
    const date = { createdAt: helper.newDate() }
    newParcel = { ...id, ...userId, ...newParcel }
    db.push(newParcel);
    return newParcel;    
}

function cancelParcel(id) {
    let parcel = db.find(item => {
        return item.id == id;
    })
    if(parcel.status === true) {
        parcel.status = false
    } else {
        return {message: 'order is already cancelled'}
    }
    return parcel
}

module.exports = { getAllParcels, getOneParcel, insertParcel, cancelParcel }