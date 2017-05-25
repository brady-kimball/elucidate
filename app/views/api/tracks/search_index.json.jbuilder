json.set! "titles" do
  @tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :artist
      json.art_url asset_path(track.art.url)
    end
  end
end

json.set! "artists" do
  @artists.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :artist
      json.art_url asset_path(track.art.url)
    end
  end
end

json.set! "lyrics" do
  @lyrics.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :artist
      json.art_url asset_path(track.art.url)
    end
  end
end
