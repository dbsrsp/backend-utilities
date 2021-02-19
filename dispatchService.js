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
    },
    acceptTrip: async(tripId) => {
        try {
            let response = await axios.put(ServiceHost.get('dispatch') + `/api/auto.dispatch/${tripId}/accept`)

            return response.data
        } catch(err) {
            console.log(err)
            throw new Error(err.data.error.message)
        }
    },
    checkIfDriverNearLocation: async({ driverId, lat, long }) => {
        try {
            const response = await axios.post(ServiceHost.get('dispatch') + '/service/check.if.driver.near.location', 
            {
                driverId,
                lat,
                long
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
} 