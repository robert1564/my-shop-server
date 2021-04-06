function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        // jwt eroare de autentificare
        return res.status(401).json({message: "The user is not authorized"})
    }

    if (err.name === 'ValidationError') {
        //  eroare de validare
        return res.status(401).json({message: err})
    }

    // eroare de server
    return res.status(500).json(err);
}

module.exports = errorHandler;