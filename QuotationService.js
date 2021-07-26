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
    },

    create: async({ pickup_location, dropoff_location, serviceAreaId }) => {
        try {
            const response = await axios.post(ServiceHost.get('quotation') + '/service/quotation.create', { pickup_location, dropoff_location, serviceAreaId })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },

    useQuotation: async(id) => {
        try {
            const response = await axios.put(ServiceHost.get('quotation') + '/service/quotation.use/' + id)

            return response.data
        }
        catch(err) {
            throw new Error(err.response.data.message)
        }
    },

    deleteQuotation: async(id) => {
        try {
            const response = await axios.delete(ServiceHost.get('quotation') + '/service/quotation.delete/' + id)

            return response.data
        }
        catch(err) {
            throw new Error(err.response.data.message)
        }
    }
}

module.exports.GetQuotationDetails = GetQuotationDetails