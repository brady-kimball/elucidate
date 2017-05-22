export const fetchTracks = () => (
  $.ajax({
    url: "/api/tracks/",
    method: "GET"
  })
);

export const fetchSingleTrack = (id) => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "get"
  })
);

export const createTrack = (track) => (
  $.ajax({
    url: "/api/tracks/",
    method: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: track
  })
);

export const updateTrack = (track) => {
  return $.ajax({
    url: `/api/tracks/${track.get("track[id]")}`,
    method: "PATCH",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: track
  });
};

export const updateTrackArt = (track) => {
  return $.ajax({
    url: `/api/tracks/${track.get("track[id]")}`,
    method: "PATCH",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: track
  });
};

export const deleteTrack = (id) => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "DELETE"
  })
);
