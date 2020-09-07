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

module.exports.GetQuotationDetails = GetQuotationDetails