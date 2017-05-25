class Api::AnnotationsController < ApplicationController
  def index
    if params[:track_id] && params[:track_id] != ""
      @annotations = Annotation.by_track(params[:track_id])
    else
      @annotations = Annotation.all
    end
    render :index
  end

  def create
    @annotation = Annotation.new(annotation_params)
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update_attributes(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.destroy!
    render :show
  end

  def upvote
    @annotation = Annotation.find(params[:id])
    vote = Vote.find_or_create_by(
      user_id: current_user.id,
      voteable_type: 'Annotation',
      voteable_id: @annotation.id
    )
    vote.value = (vote.value == 1 ? 0 : 1)
    vote.save!
    render :show
  end

  def downvote
    @annotation = Annotation.find(params[:id])
    vote = Vote.find_or_create_by(
      user_id: current_user.id,
      voteable_type: 'Annotation',
      voteable_id: @annotation.id
    )
    vote.value = (vote.value == -1 ? 0 : -1)
    vote.save!
    render :show
  end


  private

  def annotation_params
    params.require(:annotation)
      .permit(:user_id, :annotation_container_id, :body)
  end
end
