# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tracks

- `GET /api/tracks`
  - Tracks index/search
  - accepts `genre_name` query param to list notes of a genre
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Annotations
- `GET /api/annotations`
- `POST /api/annotations`
- `PATCH /api/annotations/:id`
- `DELETE /api/annotations/:id`

### Comments
- `GET /api/comments`
- `POST /api/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Genres
- `GET /api/genres`
- `GET /api/genres/:id`:
