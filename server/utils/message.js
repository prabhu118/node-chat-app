var genMessage = function(from , text) {
    return {
        from,
        text,
        createdAt : new Date()
    }
}

module.exports = genMessage;