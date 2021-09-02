const axios = require('axios').default
const serviceHost = require('./ServiceHost')

module.exports.TransactionService = TransactionService = {
    create: async({ chargeId, bookingId, amount, riderId, paymentMethodId }) => {
        try {
            let response = await axios.post(serviceHost.get('transaction') + '/service/transaction.create', {
                chargeId,
                bookingId,
                amount,
                riderId,
                paymentMethodId
            })

            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
}