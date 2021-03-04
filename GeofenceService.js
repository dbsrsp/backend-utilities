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
        console.log(err.response.data.message)
        throw new Error(err.response.data.message)
    }
}

const RemoveFromQueue = async(driverId) => {
    try {
        const response = await axios.put(ServiceHost.get('geofence') + '/api/staging.exit/' + driverId)

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

const GetAllDriversQueueInStagingOfAirport = async(id) => {
    try {
        const response = await axios.get(ServiceHost.get('geofence') + '/api/staging.get.all.queue.drivers.by.airport/' + id)

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

module.exports = {
    GetGeofencePricing,
    RemoveFromQueue,
    GetAllDriversQueueInStagingOfAirport,
    GeofenceService: {
        getServiceAreaDetailsById: async(id) => {
            try {
                const response = await axios.get(ServiceHost.get('geofence') + '/service/service.area.details/' + id)

                return response.data
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    }
}