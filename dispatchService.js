const axios = require('axios').default
const ServiceHost = require('./ServiceHost')

module.exports.dispatchService = dispatchService = {
    GetNearByDrivers: async({
        lat,
        long,
        radius
    }) => {
        try {
            let response = await axios.post(ServiceHost.get('dispatch') + '/api/location.tracking.get.nearby.drivers', {
                lat,
                long,
                radius
            })

            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    }
} 