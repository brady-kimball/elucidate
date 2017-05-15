# Elucidate

[Heroku link][heroku] **Note:** This will be a link to the production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/Me91V9CP/elucidate

## Minimum Viable Product

Elucidate is a web app inspired by Genius, using a Ruby on Rails
backend and a React/Redux frontend. By the end of week 9, this app
will satisfy the following with bug-free navigation, adequate seeding,
and sufficient CSS styling:

- Hosting on Heroku
- Account creation, login, and guest/demo login
- Tracks
- Annotations on segments of a track's lyrics
- Comments on annotations
- Voting on annotations and comments
- Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: /schema.md

## Implementation Timeline
### Phase 1: Backend setup and Frontend user authentication (2 days)
**objective:** Working Rails project with front-end authentication

### Phase 2: Track model, API, and components (2 days)
**objective:** Tracks can be created, read, updated, and destroyed
through the Rails API.

### Phase 3: Annotations, components and highlighting (3 days)
**objective:** Annotations can be created, read, updated, and destroyed
through the Rails API. Text in a track can be assigned an annotation
when users highlight a line.

### Phase 4: Comments (1 day)
**objective:** Comments can be created, read, updated, and destroyed
through the API. Comments belong to users and either tracks or annotations.

### Phase 5: Voting (1 day)
**objective:** Votes belong to users and either annotations or comments.

### Bonus Features (TBD)
- Tag tracks by artist, style, language, or other features
- Search tracks by title
