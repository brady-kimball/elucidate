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
- `GET /api/tracks/:id/annotations`
- `POST /api/tracks/:id/annotations`
- `PATCH /api/tracks/:id/annotations/:id`
- `DELETE /api/tracks/:id/annotations/:id`

### Comments
- `GET /api/tracks/:id/annotations/:id/comments`
- `POST /api/tracks/:id/annotations/:id/comments`
- `PATCH /api/tracks/:id/annotations/:id/comments/:id`
- `DELETE /api/tracks/:id/annotations/:id/comments/:id`

### Genres
- `GET /api/genres`
- `GET /api/genres/:id`:
