const axios = require('axios').default
const serviceHost = require('./ServiceHost')


module.exports.notificationService = notificationService = {
    sendReadyToGo: async(tripId, driverId) => {
        try {
            const result = await axios.post(serviceHost.get('notification') + '/api/notification.send.ready.to.go', {
                tripId,
                driverId
            })
    
            return result.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    },
    sendSms: async({ message, phoneNumber }) => {
        try {
            const result = await axios.post(serviceHost.get('notification') + '/api/send.sms', {
                message,
                phoneNumber
            })
    
            return result.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}