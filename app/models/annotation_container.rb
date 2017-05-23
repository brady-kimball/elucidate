class AnnotationContainer < ApplicationRecord
  validates :track_id, :start_index, :end_index,
            presence: true

  validates :track_id, uniquness: { scope: [:start_index, :end_index] }

  belongs_to :track

  def self.by_track(track_id)
    self.where(track_id: track_id)
  end
end
