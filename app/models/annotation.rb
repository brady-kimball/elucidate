class Annotation < ApplicationRecord
  validates :user_id, :track_id, :body, :start_index, :end_index,
            presence: true

  belongs_to :track
  belongs_to :user
end
