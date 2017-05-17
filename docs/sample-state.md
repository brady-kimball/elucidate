```js
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: ["Username cannot be blank"]
  },
  tracks: {
    1: {
      title: "Sample Track",
      lyrics: "La la la la doo doo doo",
      artist: "Mozart",
      user_id: 1
    },
    errors: []
  },
  annotations: {
    1: {
      body: "Here la la la refers to the sound people make when they imitate music",
      user_id: 1,
      char_start: 0,
      char_end: 11,
      total_score: 32
    }
  }
  comments: {
    1: {
      body: "No way it refers to la as in los angeles",
      user_id: 2,
      annotation_id: 1,
      total_score: -3
    }
  }
  genreFilters: [];
}
```
