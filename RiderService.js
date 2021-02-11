const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetRiderDetailsInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('rider') + '/services/rider.get.info.by.userids', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.GetRiderDetailsInfoByUserIds = GetRiderDetailsInfoByUserIds

module.exports = {
    RiderService: {
        createRider: async(data) => {
            try {
                const response = await axios.post(ServiceHost.get('user') + '/api/rider.create', {
                    data
                })

                return response.data
            } catch(err) {
                console.log(err)
                throw new Error(err.data.error.message)
            }
        }
    }
}