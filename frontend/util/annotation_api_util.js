export const fetchAnnotations = (trackId = null) => {
  return $.ajax({
    method: "GET",
    url: "/api/annotations",
    data: {track_id: trackId}
  });
};
