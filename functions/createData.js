const Airtable = require('airtable')


exports.handler = (event, context, callback) => {

    const base = new Airtable({ apiKey: 'key6wwcVHECcbIndI' }).base('appHr1kKlgeIdxlFQ')
    base('Customer')
        .create([
            {
                fields: {
                    CustomerName: 'First'
                }
            },
            {
                fields: {
                    CustomerName: 'First'
                }
            },
            {
                fields: {
                    CustomerName: 'First'
                }
            }
        ], function (error, records) {
            if (error) {
                callback(error)
            }
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    records
                })
            })
        })


}