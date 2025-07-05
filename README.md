# Geo Service – PetConnect

Este microservicio permite registrar y consultar ubicaciones geográficas.

## Endpoints

| Método | Ruta                         | Descripción                                |
|--------|------------------------------|--------------------------------------------|
| POST   | /api/v1/geo/locations        | Registrar una ubicación                    |
| GET    | /api/v1/geo/locations/near   | Buscar ubicaciones cercanas                |

### Ejemplo de JSON para POST

```json
{
  "name": "Refugio Norte",
  "type": "shelter",
  "location": {
    "type": "Point",
    "coordinates": [-78.4678, -0.1807]
  }
}
