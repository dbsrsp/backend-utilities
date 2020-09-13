const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

module.exports.paymentService = paymentService = {
    insertPayout: async({ tripId, week, year, driverId, fare, tip }) => {
        try {
            const response = await axios.post(ServiceHost.get('payment') + '/service/driver.payout.insert', {
                tripId,
                week,
                year,
                driverId,
                fare,
                tip
            })

            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    },
    createDriverPayoutSummary: async({ week, year}) => {
        try {
            const response = await axios.post(ServiceHost.get('payment') + '/service/driver.payout.summary.create', {
                week,
                year
            })

            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    }
}