export const signup = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  });
};

export const login = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);
