class RenameAnnotationColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :annotations, :annotation_id, :annotation_container_id
  end
end
