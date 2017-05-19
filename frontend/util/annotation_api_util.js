export const fetchAnnotations = (track_id = null) => {
  return $.ajax({
    method: "GET",
    url: "/api/annotations",
    data: { track_id }
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

export const deleteAnnotation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/annotations/${id}`
  });
};
