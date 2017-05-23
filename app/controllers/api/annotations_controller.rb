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

  private

  def annotation_params
    params.require(:annotation)
      .permit(:user_id, :annotation_container, :body)
  end
end
