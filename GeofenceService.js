const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetGeofencePricing = async(pickupLocation, dropoffLocation, brandId) => {
    try {
        const response = await axios.post(ServiceHost.get('geofence') + '/service/geofence.get.pricing', {
            pickUpLocation: pickupLocation,
            dropOffLocation: dropoffLocation,
            brandId
        })

        return response.data
    } catch(err) {
        throw new Error(err.error)
    }
}

module.exports.GetGeofencePricing = GetGeofencePricing