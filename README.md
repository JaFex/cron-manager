
# Cron Manager

## API

### Installation

```bash
  cd api
  yarn install
  yarn start
```

Server running at localhost:5000

### Endpoints

#### Get All Items

```http
  GET /crons
```

#### Get one Items

```http
  GET /crons/:id
```

#### Post item

```http
  POST /crons
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `schedule` | `string` | **Required**. CronJob schedule |
| `URI` | `string` | **Required**. URI |
| `HttpMethod` | `string` | **Required**. HTTP Method |
| `body` | `string` | **Required**. Body Content |
| `timeZone` | `string` | **Required**. CronJob Timezone |

#### Update item

```http
  PATCH /crons/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `schedule` | `string` | **Optional**. CronJob schedule |
| `URI` | `string` | **Optional**. URI |
| `HttpMethod` | `string` | **Obrigatório**. HTTP Method |
| `body` | `string` | **Optional**. Body Content |
| `timeZone` | `string` | **Optional**. CronJob Timezone |

#### Delete item

```http
  DELETE /crons/:id
```

#### Test CronJob

```http
  ALL /test
```

## Frontend

### Installation

```bash
  cd frontend
  yarn install
  yarn start
```

Server running at localhost:3000
