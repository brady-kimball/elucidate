json.extract! comment, :id, :body, :user_id, :annotation_id
json.user comment.user.username
json.score comment.total_votes
