@annotation_containers.each do |annotation_container|
  json.set! annotation_container.id do
    json.partial! "api/annotation_containers/annotation_container", annotation_container: annotation_container
  end
end
