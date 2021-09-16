const axios = require('axios').default
const serviceHost = require('./ServiceHost')

module.exports = {
    settingsService: {
        search: async() => {
            try {
                const response = await axios.post(serviceHost.get('settings') + '/settings.search')

                return response.data
            } catch(err) {
                throw new Error(err.response.data.message)
            }
        }
    }
}