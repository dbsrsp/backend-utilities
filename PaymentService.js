const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

module.exports.paymentService = paymentService = {
    insertPayout: async({ tripId, week, year, driverId, fare, tip, cancellationFee }) => {
        try {
            const response = await axios.post(ServiceHost.get('payment') + '/service/driver.payout.insert', {
                tripId,
                week,
                year,
                driverId,
                fare,
                tip,
                cancellationFee
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
    },
    chargeanonymous: async({ cardDetails: { cardNumber, accountName, cvc, year, month }, amount }) => {
        try {
            const response = await axios.post(ServiceHost.get('payment') + '/api/payment.charge.anonymous', {
               cardDetails: {
                   cardNumber,
                   accountName,
                   cvc,
                   year,
                   month
               },
               amount
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    resetTrip: async(tripId) => {
        try {
            const response = await axios.put(ServiceHost.get('payment') + '/service/reset.driver.payout/' + tripId)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    getalldriverpayoutaccounts: async(driverId) => {
        try {
            const response = await axios.get(ServiceHost.get('payment') + `/api/get.all.driver.payout.accounts/${driverId}`)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}