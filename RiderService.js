const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetRiderDetailsInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('rider') + '/services/rider.get.info.by.userids', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

module.exports = {
    RiderService: {
        createRider: async(data) => {
            try {
                const response = await axios.post(ServiceHost.get('user') + '/api/rider.create', data)

                return response.data
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        },
        generatetoken: async(id) => {
            try {
                const response = await axios.get(ServiceHost.get('user') + '/service/generate.token/' + id)

                return response.data.result
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    },
    GetRiderDetailsInfoByUserIds,
    updateRiderDetails: async({ riderId, firstName, lastName, email, phone, ada }) => {
        try {
            const response = await axios.put(ServiceHost.get('rider') + '/api/rider/' + riderId, { firstName, lastName, email, phone, ada })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}