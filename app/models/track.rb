class Track < ApplicationRecord
  validates :title, :artist, :user_id, :lyrics, presence: true

  has_attached_file :art, styles: { medium: "300x300>", thumb: "100x100>" },
                     default_url: "default-art.jpg"
  validates_attachment_content_type :art, content_type: /\Aimage\/.*\z/

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
