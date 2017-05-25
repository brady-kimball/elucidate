class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :value
      t.integer :user_id, null: false
      t.references :voteable, polymorphic: true, index: true, null: false
      t.timestamps
    end

    add_index :votes, [:user_id, :voteable_id, :voteable_type], unique: true
  end
end
