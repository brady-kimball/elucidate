export const fetchComments = (track_id = null) => {
  return $.ajax({
    method: "GET",
    url: "/api/comments",
    data: (track_id ? { track_id } : {})
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment }
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`
  });
};

export const upvoteComment = (id) => {
  return $.ajax({
    method: "POST",
    url: `api/comments/${id}/upvote`
  });
};

export const downvoteComment = (id) => {
  return $.ajax({
    method: "POST",
    url: `api/comments/${id}/downvote`
  });
};
