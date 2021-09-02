const RequestValidationMiddleware = require('./RequestValidationMiddleware')
const ServiceHost = require('./ServiceHost')
const { InsertActivityLog } = require('./ActivityLogService')
const { GetRiderDetailsInfoByUserIds, RiderService } = require('./RiderService')
const { GetDriverInfoByUserIds, GetDriverDetailsByIds, getOnlineDrivers, getAllDrivers, DriverService } = require('./DriverService')
const { GetUserInfoByUserIds, userService } = require('./UserService')
const { GetProductListByBrandId } = require('./ProductService')
const { GetGeofencePricing, RemoveFromQueue, GetAllDriversQueueInStagingOfAirport, GeofenceService } = require('./GeofenceService')
const { GetQuotationDetails, QuotationService } = require('./QuotationService')
const { createTripAsap, sendTrip, getTripDetails, TripService } = require('./TripService')
const { createBookingAsap, markReadyToGo, bookingService } = require('./BookingService')
const { notificationService } = require('./NotificationService')
const { paymentService } = require('./PaymentService')
const { emailService } = require('./emailService')
const { dispatchService } = require('./dispatchService')
const { PaymentMethodService } = require('./PaymentMethodService')
const { settingsService } = require('./settingsService')
const {  FlightService } = require('./FlightService')
const { UtilityService  } = require('./utility.service')
const { TransactionService } = require('./transaction.service')
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
    GetProductListByBrandId,
    GetGeofencePricing,
    RemoveFromQueue,
    GetDriverDetailsByIds,
    GetAllDriversQueueInStagingOfAirport,
    GetQuotationDetails,
    createTripAsap,
    createBookingAsap,
    markReadyToGo,
    getOnlineDrivers,
    sendTrip,
    notificationService,
    getAllDrivers,
    paymentService,
    getTripDetails,
    bookingService,
    emailService,
    userService,
    dispatchService,
    TripService,
    RiderService,
    PaymentMethodService,
    settingsService,
    GeofenceService,
    QuotationService,
    FlightService,
    DriverService,
    UtilityService,
    TransactionService
}