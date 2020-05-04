const ENV = process.env

const ServiceHost = {
    SERVICE_USER_HOST: ENV.SERVICE_USER_SERVICE_SERVICE_HOST,
    SERVICE_USER_PORT: ENV.SERVICE_USER_SERVICE_SERVICE_PORT,
    SERVICE_BOOKING_HOST: ENV.SERVICE_BOOKING_SERVICE_SERVICE_HOST,
    SERVICE_BOOKING_PORT: ENV.SERVICE_BOOKING_SERVICE_SERVICE_PORT,
    SERVICE_GEOFENCE_HOST: ENV.SERVICE_GEOFENCE_SERVICE_SERVICE_HOST,
    SERVICE_GEOFENCE_PORT: ENV.SERVICE_GEOFENCE_SERVICE_SERVICE_PORT,
    SERVICE_PAYMENT_HOST: ENV.SERVICE_PAYMENT_SERVICE_SERVICE_HOST,
    SERVICE_PAYMENT_PORT: ENV.SERVICE_PAYMENT_SERVICE_SERVICE_PORT,
    SERVICE_PRODUCT_HOST: ENV.SERVICE_PRODUCT_SERVICE_SERVICE_HOST,
    SERVICE_PRODUCT_PORT: ENV.SERVICE_PRODUCT_SERVICE_SERVICE_PORT,
    SERVICE_QUOTATION_HOST: ENV.SERVICE_QUOTATION_SERVICE_SERVICE_HOST,
    SERVICE_QUOTATION_PORT: ENV.SERVICE_QUOTATION_SERVICE_SERVICE_PORT,
    SERVICE_RIDER_HOST: ENV.SERVICE_RIDER_SERVICE_SERVICE_HOST,
    SERVICE_RIDER_PORT: ENV.SERVICE_RIDER_SERVICE_SERVICE_PORT,
    SERVICE_TRIP_HOST: ENV.SERVICE_TRIP_SERVICE_SERVICE_HOST,
    SERVICE_TRIP_PORT: ENV.SERVICE_TRIP_SERVICE_SERVICE_PORT,
    SERVICE_TRANSACTION_HOST: ENV.SERVICE_TRANSACTION_SERVICE_SERVICE_HOST,
    SERVICE_TRANSACTION_PORT: ENV.SERVICE_TRANSACTION_SERVICE_SERVICE_PORT,
    SERVICE_DRIVER_HOST: ENV.SERVICE_DRIVER_SERVICE_SERVICE_HOST,
    SERVICE_DRIVER_PORT: ENV.SERVICE_DRIVER_SERVICE_SERVICE_PORT,
    SERVICE_NOTIFICATION_HOST: ENV.SERVICE_NOTIFICATION_SERVICE_SERVICE_HOST,
    SERVICE_NOTIFICATION_PORT: ENV.SERVICE_NOTIFICATION_SERVICE_SERVICE_PORT,
    SERVICE_RABBITMQ_HOST: ENV.SERVICE_RABBITMQ_SERVICE_SERVICE_HOST,
    SERVICE_RABBITMQ_PORT: ENV.SERVICE_RABBITMQ_SERVICE_SERVICE_PORT,

    get: function(serviceName){
        serviceName = serviceName.toUpperCase()
        return 'http://' + this[`SERVICE_${serviceName}_HOST`] + ':' + this[`SERVICE_${serviceName}_PORT`]
    },
    getamp: function() {
        return 'amqp://' + process.env.RABBITMQ_USER + ':' + process.env.RABBITMQ_PASS + '@' +  this[`SERVICE_RABBITMQ_HOST`] + ':' + this[`SERVICE_RABBITMQ_PORT`]
    }
}

module.exports = ServiceHost