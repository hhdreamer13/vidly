import http from "./httpService";

const apiUrl = "/users";

export function register(user) {
  return http.post(apiUrl, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
