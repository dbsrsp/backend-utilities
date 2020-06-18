const RequestValidationMiddleware = require('./middleware/RequestValidationMiddleware');
const ServiceHost = require('./service/ServiceHost');

class ErrorResponse {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  toString() {
    return JSON.stringify({ code: this.code, message: this.message });
  }
}

const compareSort = (property) => ((a, b) => {
  const itemA = a[property];
  const itemB = b[property];

  let comparison = 0;
  if (itemA > itemB) comparison = 1;
  else if (itemB > itemA) comparison = -1;
  return comparison;
});

module.exports = {
  ErrorResponse,
  ServiceHost,
  RequestValidationMiddleware,
  compareSort,
};
