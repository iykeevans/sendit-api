function checkFieldsPost(req, res, next) {
    const { startLocation, destination, itemName } = req.body

    if (startLocation && destination && itemName) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = { checkFieldsPost }