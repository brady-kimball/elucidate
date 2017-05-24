@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :artist, :lyrics
    json.numAnnotations track.annotations.count
    json.art_url asset_path(track.art.url)
  end
end
