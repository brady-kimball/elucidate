export const fetchSearchResults = ( query ) => {
  return $.ajax({
    method: "GET",
    url: "api/tracks/",
    data: { query }
  });
};
