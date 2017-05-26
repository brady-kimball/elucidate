json.set! "annotations" do
  @annotation_votes.each do |vote|
    json.set! vote.voteable_id, vote.value
  end
end

json.set! "comments" do
  @comment_votes.each do |vote|
    json.set! vote.voteable_id, vote.value
  end
end
