class Api::TracksController < ApplicationController
  def index
    if params[:query]
      exact_query = params[:query]
      exact_fuzzy_query = exact_query.split("").join("%")
      query = "%#{exact_query}%"
      fuzzy_query = "%#{exact_fuzzy_query}%"

      @tracks = Track.where("title ILIKE ?", fuzzy_query)
      @artists = Track.where("artist ILIKE ?", fuzzy_query)
      @lyrics = Track.where("lyrics ILIKE ?", query)
      render :search_index
    else
      @tracks = Track.all.includes(:annotations)
      render :index
    end
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
    new_track_params = track_params
    new_track_params["lyrics"] = track_params["lyrics"].gsub(/\r/, '')
    if @track.update_attributes(new_track_params)
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
