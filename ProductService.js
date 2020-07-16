const ServiceHost = require('./ServiceHost')
const axios = require('axios').default


const GetProductListByBrandId = async(brandId) => {
    try {
        const response = await axios.get(ServiceHost.get('product') + '/api/product.search.by.brandId/' + brandId)

        return response.data
    } catch(err) {
        throw new Error(err.error.message)
    }
}

module.exports.GetProductListByBrandId = GetProductListByBrandId