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


module.exports.userService = userService = {
    enableDriver: async(userId) => {
        try {
            const response = await axios.put(ServiceHost.get('user') + '/api/user/enable.driver/' + userId)
    
            return response.data
        } catch(err) {
            throw new Error(err.data.error)
        }
    },
    getScopes: async(userId) => {
        try {
            const response = await axios.get(ServiceHost.get('user') + `/service/admin/${userId}/scopes`)
    
            return response.data
        } catch(err) {
            throw new Error(err.data.error)
        }
    },
    checkIfRiderEmailPhoneExists: async({ email, phone}) => {
        try {
            const response = await axios.post(ServiceHost.get('user') + `/service/rider.check.if.email.phone.exists`,
            {
                email,
                phone
            })
    
            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    }

}