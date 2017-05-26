# Elucidate

[Elucidate live](https://elucidate-me.herokuapp.com/#/ "Elucidate")

Elucidate is a webapp and online community inspired by [Genius](genius.com) for sharing song information and lyric interpretation, allowing users to submit tracks, annotations, comments, and vote for their favorite interpretations.  It was built using Ruby on Rails in conjunction with React/Redux and PostgreSQL.

## Features & Implementation

* Front-end and back-end user authentication
* Ability to create, edit, update and destroy tracks
* Add annotations to lyric snippets by highlighting text
* Comments on annotations
* Single search bar for tracks, artist, or lyrics
* Voting on annotations and comments

### Authentication

Elucidate uses BCrypt to securely store usernames, emails and digests in the database.  Users can login using either their username or password.

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/auth.gif "Auth Forms")


### Tracks

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Track+Index.png "Track Index")

Users have full access to create, read, update, or destroy their tracks.  Tracks are indexed on the home page by number of annotations.

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Add+Track+Form.png "Add Track")

Users can add tracks with just the artist information, track title and lyrics.  If they desire, a user can also add additional information like album art, a youtube link, and production information. Each youtube link is validated before submitting as follows:

``` javascript
validYoutubeLink() {
  return (
    /(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/
    .test(this.state.link)
  );
}
```

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Edit+Track+Form.png "Edit Track")

The track form is reused for editing tracks with the track information pre-populated and additional buttons added for update and deletion.

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Track+Show+Page.png "Track Show")

Each track has it's own show page, containing more information about the track (album art, producers, editors etc) as well as an embeddable youtube link to the song itself.  The lyrics are displayed with their corresponding annotations highlighted in yellow.


### Annotations

Annotations are where users can add their insight into what they think a lyric means.  Each user can also add comments to a given annotation.

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Annotation+show.png "Annotation Show")

If an annotation already exists for a given slice of lyrics, the user needs just needs to click on the highlighted text and add their insight.

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Adding+Annotations+Elucidate.gif "Adding annotaion")

Adding a brand new annotation is done by simply highlighting the slice of text the user wishes to annotate.  On mouse-up, a form is displayed either prompting the user to log in, or to enter their annotation.  The start and indices are attained with the following slices of code and stored in the database along with the body, container and user ids.  

Note that the function attempts to find the indices beginning with both the anchor node and the focus node to account for highlighting top to bottom versus bottom to top.  

```javascript
// frontend/components/track_show/track_show.jsx
getRange(e) {
  e.preventDefault();
  this.setState({yPos: (e.pageY - 360) });
  this.setState({ currentAnnotationContainer: "" });
  let track = this.props.track;
  let selection = document.getSelection();
  let anchorNode = selection.anchorNode;
  let start = selection.anchorOffset;

  for (let i = 0; i < 2; i++) {
    if (i === 1) {
      anchorNode = selection.focusNode;
      start = selection.focusOffset;
    }

    let end = start + selection.toString().length;
    let offset = findOffset(anchorNode.parentElement);
    start += offset;
    end += offset;

    if (track.lyrics.slice(start, end) === selection.toString() ) {
      this.setState({selection: [start, end]});
    }
  }
}
```

```javascript
// frontend/util/annotation_util.jsx
export const findOffset = (node) => {
  let offset = 0;
  let prevSibling = node.previousSibling;

  while (prevSibling) {
    offset += prevSibling.innerText.length;
    prevSibling = prevSibling.previousSibling;
  }

  return offset;
};
```

### Search

Elucidate utilizes a single input field that returns results matching either artists, track titles, or song lyrics.  

The search returns approximate matches for titles and artists, strict matches for lyrics using the following database queries:

```Ruby
def index
  if params[:query]
    exact_query = params[:query]
    exact_fuzzy_query = query.split("").join("%")
    query = "%#{exact_query}%"
    fuzzy_query = "%#{exact_fuzzy_query}%"

    @tracks = Track.where("title ILIKE ?", fuzzy_query)
    @artists = Track.where("artist ILIKE ?", fuzzy_query)
    @lyrics = Track.where("lyrics ILIKE ?", query)
    render :search_index
  else
    @tracks = Track.all.includes(:annotations)
    render :index
  end
end
```

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Fuzzy+search.gif "Fuzzy Title Search")

![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Lyrics+search.gif "Lyric Search")



### Voting

Users can vote on all annotations and comments, which get displayed in descending order of score.  Votes persist and the thumbs get colored for readability.  


![alt-text](https://s3-us-west-1.amazonaws.com/elucidate-dev/production-readme-pics/Voting.gif "Voting")

## Future Improvements

### User page / Score Tracking

### Artist Page

### Genres and Tags
