class Api::TracksController < ApplicationController
  def index
    if params[:query]
      query = params[:query]
      @tracks = Track.where("title ILIKE ?", query)
    else
      @tracks = Track.all.includes(:annotations)
    end
    render :index
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render :show
    else
      render json: {}
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render :show
    else
      render json: {}
    end
  end

  private

  def track_params
    params.require(:track).permit(
      :title, :artist, :user_id, :lyrics, :writers, :producers, :editors,
      :link, :art
    )
  end
end
