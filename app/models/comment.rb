class Comment < ApplicationRecord
  validates :body, :user, :annotation, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
  belongs_to :annotation

  has_one :track,
    through: :annotation,
    source: :track

  def self.by_track(track_id)
    self.includes(:track).where("tracks.id" => track_id)
  end

end
