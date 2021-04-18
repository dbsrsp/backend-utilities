const axios = require('axios').default
const ServiceHost = require('./ServiceHost')

module.exports = {
    FlightService: {
        getFlightStatus: async({ type, flightNumber, flightTime}) => {
            try {
                const response = await axios.get(`${ServiceHost.get('flight')}/flight.status`, { data: { type, flightTime, flightNumber }})

                return response.data
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    }
}