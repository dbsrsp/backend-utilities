const RequestValidationMiddleware = require('./RequestValidationMiddleware')
const ServiceHost = require('./ServiceHost')
const { InsertActivityLog } = require('./ActivityLogService')
const { GetRiderDetailsInfoByUserIds } = require('./RiderService')
const { GetDriverInfoByUserIds } = require('./DriverService')
const { GetUserInfoByUserIds } = require('./UserService')
const { GetProductListByBrandId } = require('./ProductService')
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


const compareSort = (property) => {
    return (a, b) => {
        const itemA =  a[property]
        const itemB = b[property]
    
        let comparison = 0
        if(itemA > itemB)
            comparison = 1
        else if (itemB > itemA)
            comparison = -1
        return comparison
    }
}


module.exports = {
    ErrorResponse,
    ServiceHost,
    RequestValidationMiddleware,
    compareSort,
    InsertActivityLog,
    GetRiderDetailsInfoByUserIds,
    GetDriverInfoByUserIds,
    GetUserInfoByUserIds,
    GetProductListByBrandId
}