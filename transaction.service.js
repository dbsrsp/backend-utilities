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
    },
    get_all_transactions_by_booking: async(bookingId) => {
        try {
            let response = await axios.get(serviceHost.get('transaction') + '/service/transaction.get.all.by.bookingId/' + bookingId)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    createRider: async({ userId, brandId, avatarUrl, email, phone, firstName, lastName, fullName }) => {
        try {
            let response = await axios.post(serviceHost.get('transaction') + '/service/rider.create', {
                userId,
                brandId,
                avatarUrl,
                email,
                phone,
                firstName,
                lastName,
                fullName
            })

            return response.data
        } catch(err) {
            throw new Error(error.response.data.message)
        }
    }
}