const handleSuccess = (res, data) => {
  res.send({
    status: 'success',
    data,
  });
};
const handleError = (res, errorCode, message) => {
  res.status(errorCode).send({
    status: 'failed',
    message,
  });
};

module.exports = { handleSuccess, handleError };
