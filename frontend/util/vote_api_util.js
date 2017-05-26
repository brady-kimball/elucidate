export const fetchVotes = () => {
  return $.ajax({
    method: "GET",
    url: "/api/votes"
  });
};
