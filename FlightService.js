const axios = require('axios').default
const ServiceHost = require('./ServiceHost')

module.exports = {
    FlightService: {
        getFlightStatus: async({ type, fligthNumber, flightTime}) => {
            try {
                const response = await axios.get(`${ServiceHost.get('flight')}/flight.status`, { data: { type, flightTime, fligthNumber }})

                return response
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    }
}