function parseError(error) {
    if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(e => e.properties.message).join(' \n')
    } else {
        return error.message
    }
}

module.exports = {
    parseError
};