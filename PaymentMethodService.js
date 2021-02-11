const ServiceHost = require('./ServiceHost')
module.exports = {
    PaymentMethodService: {
        create: async({ paymentMethod, user }) => {
            try {
                let response = axios.post(ServiceHost.get('payment') + '/api/paymentmethod/create', {
                    data: paymentMethod,
                    user
                })

                return response.data
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    }
}