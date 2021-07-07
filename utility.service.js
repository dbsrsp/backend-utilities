module.exports.UtilityService = {
    parseSearchRequest: ({ filter, pageSize, pageNum, orderBy }) => {
        return {
            filter,
            pageSize: pageSize ? parseInt(pageSize) : 20,
            pageNum: pageNum ? parseInt(pageNum) : 1,
            orderBy
        }
    }
}