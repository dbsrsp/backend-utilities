const axios = require('axios').default
const ServiceHost = require('./ServiceHost')
const GetQuotationDetails = async(quotationId) => {
    try {
        const response = await axios.get(ServiceHost.get('quotation') + '/api/quotation.get.detail.by.id/' + quotationId)

        return response.data
    } catch(err) {
        console.log(err)
        throw new Error(err.data.error)
    }
}

module.exports.QuotationService = {
    createByFreeCall: async(data) => {
        try {
            const response = await axios.post(ServiceHost.get('quotation') + '/api/qoutation/service/create.via.free.call', data)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}

module.exports.GetQuotationDetails = GetQuotationDetails