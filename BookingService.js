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

module.exports.createBookingAsap = createBookingAsap