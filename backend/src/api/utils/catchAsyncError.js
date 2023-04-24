const catchAsyncErrorError = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {next(err)
   console.log(err)});
};

module.exports =  catchAsyncErrorError;