class ValidationError extends Error {}
class NotFoundError extends Error {}

function handleError(err, req, res, next) {
    if(err instanceof NotFoundError) {
        return res.status(404).render('error', {
            message: 'There is no ID in our database',
        })
    }

    res.status(err instanceof ValidationError ? 400 : 500).render('error', {
        message: err instanceof ValidationError? err.message : 'Try again later',
    })
}

module.exports = {
    handleError,
    ValidationError,
    NotFoundError
}