exports.handler = function (event, context, callback) {
    if (event.httpMethod === "GET") {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'this is get request'
            })
        })
    }
    else if (event.httpMethod === "POST") {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'this is post request'
            })
        })
    }
    else if (event.httpMethod === "DELETE") {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'this is delete request'
            })
        })
    }
    else if (event.httpMethod === "PUT") {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'this is put request'
            })
        })
    }
    else {
        callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: `No implementation for ${event.httpMethod}`
            })
        })
    }
}