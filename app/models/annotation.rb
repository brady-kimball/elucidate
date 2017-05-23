class Annotation < ApplicationRecord
  validates :user_id, :body, :annotation_container_id,
            presence: true

  belongs_to :annotation_container
  has_one :track,
    through: :annotation_container,
    source: :track
  belongs_to :user

  def self.by_track(track_id)
    self.includes(:track).where("track.id" => track_id)
  end
end
