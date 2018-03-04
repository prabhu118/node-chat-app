var genMessage = function(from , text) {
    return {
        from,
        text,
        createdAt : new Date()
    }
}

var genLocationMessage = function(from,latitude,longitude) {
    return {
        from,
        url : `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt : new Date()
    }
}

module.exports = {genMessage,genLocationMessage};