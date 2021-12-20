const express = require('express')
const fs = require('fs');
const swaggerCombine = require('swagger-combine');

const PORT = process.env.PORT || 3000;

const config = JSON.parse(fs.readFileSync('/config.json'));

const app = express();
app.use('/docs', express.static('dist'));
app.get('/openapi.json', swaggerCombine.middleware(config));
app.listen(PORT);

