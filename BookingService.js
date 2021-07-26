const axios = require('axios').default
const serviceHost = require('./ServiceHost')

const createBookingAsap = async(asapDetails) => {
    try {
        const response = await axios.post(serviceHost.get('booking') + '/api/booking.create.asap', asapDetails)

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

const markReadyToGo = async(bookingId) => {
    try {
        const response = await axios.put(serviceHost.get('booking') + '/api/booking.readytogo/' + bookingId)

        return response.data
    } catch(err) {
        throw new Error(err.data.error)
    }
}

module.exports.createBookingAsap = createBookingAsap

module.exports.markReadyToGo = markReadyToGo

module.exports.bookingService = bookingService = {
    getAllBookingsByTripId: async(tripId) => {
        try {
            const response = await axios.get(serviceHost.get('booking') + '/api/booking.get.all.by.tripId/' + tripId)

            return response.data
        } catch(err) {
            throw new Error(err.data.error.message)
        }
    },
    getBookingsForInvoice: async({ portalId, dateFrom, dateEnd }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/booking.get.for.invoice', {
                portalId,
                dateFrom,
                dateEnd
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    checkIfValidPaymentMethodPortal: async({ portalId, paymentMethodId }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/check.if.valid.paymentmethod.portal', {
                portalId,
                paymentMethodId
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    markBookingsAsPaid: async({ ids }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/bookings.mark.paid', {
               ids
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    checkBookingsIfPaid: async({ ids }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/bookings.check.if.paid', {
               ids
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    createByFreeCall: async({
        quotationId,
        pickUpLocation,
        dropOffLocation,
        productId,
        riderId,
        totalAmount,
        tip,
        driverTake,
        tripId,
        pax,
        luggage,
        pickUpTime,
        paymentMethodId,
        airportFee,
        isDriverCollect
    }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/create.booking.by.freecall', {
                quotationId,
                pickUpLocation,
                dropOffLocation,
                productId,
                riderId,
                totalAmount,
                tip,
                driverTake,
                tripId,
                pax,
                luggage,
                pickUpTime,
                paymentMethodId,
                airportFee,
                isDriverCollect
             })

             return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    markbookingsonboard: async({ ids }) => {
        try {
           let response = await axios.post(serviceHost.get('booking') + '/service/booking.mark.on.board', {
               ids
             })

             return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    editbookingpaiddetails: async({ bookingId, isPaid, isInvoice }) => {
        try {
            const response = await axios.put(serviceHost.get('booking') + '/service/edit.booking.paid.details', {
                bookingId,
                isPaid,
                isInvoice
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    getdriverdetailsbybookingid: async(bookingId) => {
        try {
            const response = await axios.get(serviceHost.get('trip') + '/service/get.driver.details.by.booking.id/' + bookingId)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    updatebookingstatus: async({ bookingId, status }) => {
        try {
            const response = await axios.put(serviceHost.get('booking') + '/service/update.booking.status', {
                bookingId,
                status
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },
    //#region quotation module
    createQuotation: async({ id, isUsed, pickUpLocation, dropOffLocation, routingInfo, pricing, serviceAreaId, timezone }) => {
        try {
            const response = await axios.post(serviceHost.get('booking') + '/service/quotation.create', {
               id,
               isUsed,
               pickUpLocation,
               dropOffLocation,
               routingInfo,
               pricing,
               serviceAreaId,
               timezone
            })

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },

    useQuotation: async(id) => {
        try {
            const response = await axios.put(serviceHost.get('booking') + '/service/quotation.use/' + id)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    },

    deleteQuotation: async(id) => {
        try {
            const response = await axios.delete(serviceHost.get('booking') + '/service/quotation.delete/' + id)

            return response.data
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }
    //#endregion
}