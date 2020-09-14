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