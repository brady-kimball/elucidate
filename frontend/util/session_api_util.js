export const signup = (user) => {
  // debugger
  let user1 = {user: {username: "tim"} };
  return $.ajax({
    url: "/api/users",
    method: "POST",
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user1
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
