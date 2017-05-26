class Api::VotesController < ApplicationController
  def index
    if current_user
      debugger
      @annotation_votes = Vote.where(
        user_id: current_user.id,
        voteable_type: "Annotation"
      )

      @comment_votes = Vote.where(
        user_id: current_user.id,
        voteable_type: "Comment"
      )
    else
      @annotation_votes = []
      @comment_votes = []
    end
    render :index
  end
end
