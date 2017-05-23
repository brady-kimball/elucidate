export const fetchAnnotationContainers = (track_id = null) => {
  return $.ajax({
    method: "GET",
    url: "/api/annotation_containers",
    data: (track_id ? { track_id } : {})
  });
};

export const createAnnotationContainer = (annotation_container) => {
  return $.ajax({
    method: "POST",
    url: "/api/annotation_containers",
    data: { annotation_container }
  });
};

export const deleteAnnotationContainer = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/annotation_containers/${id}`
  });
};
