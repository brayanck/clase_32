const EErrors = require("../services/errors/enums")

module.exports = (error, req, res, next) => {
    console.error("Error detectado entrando al Error Handler");
    console.error(error.cause);
    // switch
    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).send({ status: 'Error', error: error.message })
            break;
        default:
            res.status(500).send({ status: "error", error: "Unhandled error!" });
    }
};