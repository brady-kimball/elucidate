json.extract! @track, :id, :title, :artist, :lyrics, :user_id, :lyrics,
    :writers, :producers, :editors, :link

json.art_url asset_path(@track.art.url)
