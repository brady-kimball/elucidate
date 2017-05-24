class Api::CommentsController < ApplicationController
  def index
    if params[:track_id] && params[:track_id] != ""
      @comments = Comment.by_track(params[:track_id])
    else
      @comments = Comment.all
    end
    render :index
  end

  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :annotation_id)
  end
end
