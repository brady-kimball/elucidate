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
    data: { track }
  })
);

export const updateTrack = (track) => (
  $.ajax({
    url: "/api/tracks/5",
    method: "PATCH",
    data: { track }
  })
);

export const deleteTrack = (id) => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "DELETE"
  })
);
