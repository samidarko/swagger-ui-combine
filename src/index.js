import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const url = '/openapi.json'

const ui = SwaggerUI({
    url,
    dom_id: '#swagger',
});

ui.initOAuth({
    appName: "Swagger UI",
    // See https://demo.identityserver.io/ for configuration details.
    clientId: 'implicit'
});