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

export const allAnnotations = (annotations) => {
  let keys = Object.keys(annotations);
  let annoArray = [];
  keys.forEach( key => {
    if (key === "errors") {
      return;
    } else {
      annoArray.push(annotations[key]);
    }
  });
  return annoArray;
};

export const sortedAnnotations = (annotations) => {
  return allAnnotations(annotations).sort((a, b) => {
    if (a.start_index < b.start_index) {
      return -1;
    } else if (a.start_index > b.start_index) {
      return 1;
    } else {
      return 0;
    }
  });
};
