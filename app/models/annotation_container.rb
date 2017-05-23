class AnnotationContainer < ApplicationRecord
  validates :track_id, :start_index, :end_index,
            presence: true

  validates :track_id, uniqueness: { scope: [:start_index, :end_index] }

  belongs_to :track
  has_many :annotations,
    primary_key: :id,
    foreign_key: :annotation_container_id,
    class_name: :Annotation,
    dependent: :destroy

  def self.by_track(track_id)
    self.where(track_id: track_id)
  end
end
