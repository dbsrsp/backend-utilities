const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetDriverInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('driver') + '/services/driver.get.info.by.userIds', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.GetDriverInfoByUserIds = GetDriverInfoByUserIds