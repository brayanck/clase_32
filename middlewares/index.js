const EErrors = require('../services/errors/enums')

const errorHadler = (error,req,res,next)=>{
    console.log("Error detectado entrando al Error handler")
    console.log(error.cause)
    switch(error.code){
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).send({status:"error",error:error.message})
            break;
        default:
            res.status(400).send({status:"error",error:"unhandled error"})
    }
}

module.exports = {
    errorHadler
}





