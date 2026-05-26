
exports.globalErrorHandler = (error, req, res, next) => {
    const errorMessage = error?.message || "Internal server error"
    const statusCode = error?.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: errorMessage
    })
}