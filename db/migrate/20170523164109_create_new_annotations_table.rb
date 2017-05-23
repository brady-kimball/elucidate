class CreateNewAnnotationsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :annotation_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :annotations, :annotation_id
    add_index :annotations, :user_id
  end
end
