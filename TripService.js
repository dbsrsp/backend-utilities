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

module.exports.createTripAsap = createTripAsap