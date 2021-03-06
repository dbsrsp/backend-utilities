const axios = require('axios').default
const serviceHost = require('./ServiceHost')

const createTripAsap = async(bookingDetails) => {
    try {
        const response = await axios.post(serviceHost.get('trip') + '/api/trip.create.asap', bookingDetails)

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.sendTrip = sendTrip = async({ tripId, driverId }, userId) => {
    try {
        const response = await axios.post(serviceHost.get('trip') + `/api/trip/send?user=${userId}`, { tripId, driverId })

        return response.data
    } catch(err) {
        throw new Error(err.data.error.message)
    }
}

module.exports.createTripAsap = createTripAsap

module.exports.getTripDetails = getTripDetails = async(tripId) => {
    try {
        const response = await axios.get(serviceHost.get('trip') + `/api/trip/${tripId}/full`)

        return response.data
    } catch(err) {
        throw new Error(err.data.error.message)
    }
}

module.exports.TripService = TripService = {
    updateVehicle: async(data) => {
        try {
            const response = await axios.put(serviceHost.get('trip') + '/service/vehicle', data)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    getDriverInfoByTripIds: async(data) => {
        try {
            const response = await axios.post(serviceHost.get('trip') + '/api/trip.get.driverinfo', data)
            
            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    markBookingsAsPaid: async({ ids }) => {
        try {
            const response = await axios.post(serviceHost.get('trip') + '/service/bookings.mark.as.paid', { ids })
            
            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    getNotNotifiedBookings: async({ dateFrom, dateTo, type }) => {
        try {
            const response = await axios.post(serviceHost.get('trip') + '/service/get.not.notified.bookings', { 
                dateFrom,
                dateTo,
                type
             })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    updateBookingFligthTime: async(bookings) => {
        try {

            const response = await axios.post(serviceHost.get('trip') + '/service/update.booking.flightTime', { 
                bookings
             })

             return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    updateBookingsAsNotified: async({ ids }) => {
        try {
            const response = await axios.post(serviceHost.get('trip') + '/service/update.bookings.as.notified', { 
                ids
             })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    triphasreset: async(tripId) => {
        try {
            const response = await axios.get(serviceHost.get('trip') + `/api/trip/${tripId}/hasreset`)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    checkifbookingassignedtodriver: async(bookingId, driverId) => {
        try {
            const response = await axios.post(serviceHost.get('trip') + '/service/check.if.booking.assigned.to.driver', {
                driverId,
                bookingId
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    checkifbookinghasdriver: async(bookingId) => {
        try {
            const response = await axios.get(serviceHost.get('trip') + '/service/check.if.booking.has.driver/' + bookingId)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}