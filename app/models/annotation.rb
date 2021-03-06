class Annotation < ApplicationRecord
  include Voteable
  
  validates :user_id, :body, :annotation_container_id,
            presence: true

  belongs_to :user
  belongs_to :annotation_container
  has_many :comments,
    dependent: :destroy
  has_one :track,
    through: :annotation_container,
    source: :track

  def self.by_track(track_id)
    self.includes(:track).where("tracks.id" => track_id)
  end
end
