const axios = require('axios').default
const serviceHost = require('./ServiceHost')

const createBookingAsap = async(asapDetails) => {
    try {
        const response = await axios.post(serviceHost.get('booking') + '/api/booking.create.asap', asapDetails)

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

const markReadyToGo = async(bookingId) => {
    try {
        const response = await axios.put(serviceHost.get('booking') + '/api/booking.readytogo/' + bookingId)

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.createBookingAsap = createBookingAsap

module.exports.markReadyToGo = markReadyToGo

module.exports.bookingService = bookingService = {
    getAllBookingsByTripId: async(tripId) => {
        try {
            const response = await axios.get(serviceHost.get('booking') + '/api/booking.get.all.by.tripId/' + tripId)

            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    },
    getBookingsForInvoice: async({ portalId, dateFrom, dateEnd }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/booking.get.for.invoice', {
                portalId,
                dateFrom,
                dateEnd
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}