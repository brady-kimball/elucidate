@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :artist, :lyrics
  end
end
