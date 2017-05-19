export const fetchAnnotations = (trackId = null) => {
  return $.ajax({
    method: "GET",
    url: "/api/annotations",
    data: {track_id: trackId}
  });
};

export const createAnnotation = (annotation) => {
  return $.ajax({
    method: "POST",
    url: "/api/annotations",
    data: { annotation }
  });
};

export const updateAnnotation = (annotation) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/annotations/${annotation.id}`,
    data: { annotation }
  });
};
