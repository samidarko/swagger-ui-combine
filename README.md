# Swagger UI combine

A micro service to merge multiple swagger ui into one.

## Usage with docker-compose

```yaml
version: '3'

services:
  svc_a:
    image: repo/svc_a
  svc_b:
    image: repo/svc_b
  swagger:
    image: samidarko/swagger-ui-combine
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
      - INFO_TITLE="Swagger UI Combine"
      - INFO_VERSION=0.1.0
      - APIS=[{"url":"http://svc_a/openapi.json","paths":{"base":"/base_a"}},{"url":"http://svc_b/openapi.json","paths":{"base":"/base_b"}}]
```