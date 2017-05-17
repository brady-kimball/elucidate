json.set! @track.id do
  json.extract! @track, :id, :title, :artist, :lyrics, :user_id, :lyrics,
    :writers, :producers, :editors, :link
end
