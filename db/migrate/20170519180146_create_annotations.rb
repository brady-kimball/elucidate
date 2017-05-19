class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.string :body, null: false
      t.integer :start_index, null: false
      t.integer :end_index, null: false
      t.timestamps
    end

    add_index :annotations, :user_id
    add_index :annotations, :track_id
  end
end
