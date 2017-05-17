class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    #TODO: sort by # annotations
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
    if @track.update_attriutes(track_params)
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
      :link
    )
  end
end
