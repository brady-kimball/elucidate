class ChangeAnnotationsToAnnotationContainers < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :annotations, :annotation_containers
    remove_column :annotation_containers, :user_id
    remove_column :annotation_containers, :body
  end

  def self.down
    rename_table :annotation_containers, :annotations
    add_column :annotations, :user_id, :integer, null: false
    add_column :annotations, :body, :integer, null: false
  end
end
