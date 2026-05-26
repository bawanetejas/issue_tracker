exports.asyncHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);

        } catch (error) {
            console.error("Error in the controller -->", error)
            next(error)
        }
    }
}