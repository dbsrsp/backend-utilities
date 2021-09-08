const axios = require('axios').default
const serviceHost = require('./ServiceHost')

module.exports.emailService = emailService = {
    send: async(email, subject, props, template) => {
        try {
            const response = await axios.post(serviceHost.get('email') + '/email.send', {
                email,
                template,
                subject,
                props
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}