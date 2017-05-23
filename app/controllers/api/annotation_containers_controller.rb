class Api::AnnotationContainersController < ApplicationController
  def index
    if params[:track_id] && params[:track_id] != ""
      @annotation_containers = AnnotationContainer.by_track(params[:track_id])
    else
      @annotation_containers = AnnotationContainer.all
    end
    render :index
  end

  def create
    @annotation_container = AnnotationContainer.new(annotation_container_params)
    if @annotation_container.save
      render :show
    else
      render json: @annotation_container.errors.full_messages, status: 422
    end
  end

  def show
    @annotation_container = AnnotationContainer.find(params[:id])
    render :show
  end

  # def update
  #   @annotation_container = AnnotationContainer.find(params[:id])
  #   if @annotation_container.update_attributes(annotation_container_params)
  #     render :show
  #   else
  #     render json: @annotation_container.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @annotation_container = AnnotationContainer.find(params[:id])
    @annotation_container.destroy!
    render :show
  end

  private

  def annotation_container_params
    params.require(:annotation_container)
      .permit(:track_id, :start_index, :end_index)
  end
end
