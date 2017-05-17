

export const allTracks = (tracks) => {
  let keys = Object.keys(tracks);
  console.log(keys);
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
