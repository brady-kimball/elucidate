export const allTracks = (tracks) => {
  let keys = Object.keys(tracks);
  let trackArray = [];
  keys.forEach( key => {
    if (key === "errors") {
      return;
    } else {
      trackArray.push(tracks[key]);
    }
  });
  return trackArray;
};

export const tracksByAnnotations = (tracks) => {
  return allTracks(tracks).sort((a, b) => {
    if (a.numAnnotations < b.numAnnotations) {
      return 1;
    } else if (a.numAnnotations > b.numAnnotations) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const allAnnotationContainers = (annotationContainers) => {
  let keys = Object.keys(annotationContainers);
  let annoArray = [];
  keys.forEach( key => {
    if (key === "errors") {
      return;
    } else {
      annoArray.push(annotationContainers[key]);
    }
  });
  return annoArray;
};

export const sortedAnnotationContainers = (annotationContainers) => {
  return allAnnotationContainers(annotationContainers).sort((a, b) => {
    if (a.start_index < b.start_index) {
      return -1;
    } else if (a.start_index > b.start_index) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const annotationsByContainer = (annotations, id) => {
  let keys = Object.keys(annotations);
  let annoArray = [];
  keys.forEach( key => {
    if (annotations[key].annotation_container_id === id) {
      annoArray.push(annotations[key]);
    }
  });
  return byScore(annoArray);
};

export const byScore = (voteable) => {
  return voteable.sort( (a,b) => {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const commentsByAnnotation = (comments, annotationId) => {
  let keys = Object.keys(comments);
  let commentArray = [];
  keys.forEach( key => {
    if (key === "errors") {
      return;
    } else if (comments[key].annotation_id === annotationId) {
      commentArray.push(comments[key]);
    }
  });
  return byScore(commentArray);
};

export const searchResultsArray = (results) => {
  let resultsArrayObject = {};
  let titlesObject = results.titles || {};
  let titlesKeys = Object.keys(titlesObject);
  resultsArrayObject['titles'] = titlesKeys.map( key => {
    return titlesObject[key];
  });

  let artistsObject = results.artists || {};
  let artistsKeys = Object.keys(artistsObject);
  resultsArrayObject['artists'] = artistsKeys.map( key => {
    return artistsObject[key];
  });

  let lyricsObject = results.lyrics || {};
  let lyricsKeys = Object.keys(lyricsObject);
  resultsArrayObject['lyrics'] = lyricsKeys.map( key => {
    return lyricsObject[key];
  });

  return resultsArrayObject;
};
