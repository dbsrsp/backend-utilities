const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetUserInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('user') + '/service/user.info.get.by.userids', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

module.exports.GetUserInfoByUserIds = GetUserInfoByUserIds


module.exports.userService = userService = {
    enableDriver: async(userId) => {
        try {
            const response = await axios.put(ServiceHost.get('user') + '/api/user/enable.driver/' + userId)
    
            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    getScopes: async(userId) => {
        try {
            const response = await axios.get(ServiceHost.get('user') + `/service/admin/${userId}/scopes`)
    
            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
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
            throw new Error(err.response.data.message)
        }
    },
    checkifactive: async(id) => {
        try {
            const response = await axios.get(ServiceHost.get('user') + `/user/checkifactive/${id}`)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }

}