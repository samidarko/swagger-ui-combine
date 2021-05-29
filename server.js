const express = require('express')
const swaggerCombine = require('swagger-combine');

const PORT = process.env.PORT || 3000
const INFO_TITLE = process.env.INFO_TITLE || "Swagger UI Combine"
const INFO_VERSION = process.env.INFO_VERSION || "0.1.0"
const APIS = process.env.APIS || "[]"

const config = {
    "openapi":"3.0.2",
    "info": {
        "title": INFO_TITLE,
        "version": INFO_VERSION
    },
    "apis": JSON.parse(APIS)
}

const app = express()
app.use('/docs', express.static('dist'))
app.get('/openapi.json', swaggerCombine.middleware(config))
app.listen(PORT)
