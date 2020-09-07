const GetQuotationDetails = async(quotationId) => {
    try {
        const response = await axios.get(ServiceHost.get('quotation') + '/api/quotation.get.detail.by.id/' + quotationId)

        return response.data
    } catch(err) {
        console.log(err)
        throw new Error(err.error.message)
    }
}

module.exports.GetQuotationDetails = GetQuotationDetails