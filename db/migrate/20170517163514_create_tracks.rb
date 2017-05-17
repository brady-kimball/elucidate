class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.integer :user_id, null: false
      t.text :lyrics, null: false
      t.string :writers
      t.string :producers
      t.string :editors
      t.string :link
      t.timestamps
    end

    add_index :tracks, :user_id
  end
end
