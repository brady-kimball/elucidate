class AddUniquenessValToAnnotationContainers < ActiveRecord::Migration[5.0]
  def change
    add_index :annotation_containers, [:track_id, :start_index, :end_index],
              unique: true, name: "annotation_container_index"
  end
end
