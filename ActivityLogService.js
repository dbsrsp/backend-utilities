const ServiceHost = require('./ServiceHost')
const axios = require('axios').default

const InsertActivityLog = async(data) => {
    try {
        const result = await axios.post(ServiceHost.get('activity') + '/api/activity.create', data)

        return result.data
    } catch(err) {
        throw new Error(err.message)
    }
}

module.exports.InsertActivityLog = InsertActivityLog