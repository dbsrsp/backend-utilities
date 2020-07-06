const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetUserInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('user') + '/service/user.info.get.by.userids', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.GetUserInfoByUserIds = GetUserInfoByUserIds