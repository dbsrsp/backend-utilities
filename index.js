const RequestValidationMiddleware = require('./RequestValidationMiddleware')
const ServiceHost = require('./ServiceHost')
class ErrorResponse {
    code = ''
    message = ''

    constructor(code, message) {
        this.code = code
        this.message = message
    }

    toString() {
        return JSON.stringify({ code: this.code, message: this.message })
    }
}



module.exports = {
    ErrorResponse,
    ServiceHost,
    RequestValidationMiddleware
}