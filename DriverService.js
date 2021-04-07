const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const GetDriverInfoByUserIds = async(userIds) => {
    try {
        const response = await axios.post(ServiceHost.get('driver') + '/services/driver.get.info.by.userIds', { userIds })

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

const GetDriverDetailsByIds = async(ids) => {
    try {
        const response = await axios.post(ServiceHost.get('driver') + '/api/driver/details/search', 
        {
            ids
        })

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

module.exports.getOnlineDrivers = getOnlineDrivers = async() => {
    try {
        const response = await axios.get(ServiceHost.get('driver') + '/api/driver.get.online.drivers')

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}

module.exports.GetDriverDetailsByIds = GetDriverDetailsByIds

module.exports.GetDriverInfoByUserIds = GetDriverInfoByUserIds

module.exports.getAllDrivers = getAllDrivers = async() => {
    try {
        const response = await axios.get(ServiceHost.get('driver') + '/api/driver.get.all.drivers')

        return response.data
    } catch(err) {
        throw new Error(err.response.data.message)
    }
}