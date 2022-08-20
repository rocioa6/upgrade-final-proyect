const users = [
  { email: "user@cookit.com", password: "12345", name: "Paco" },
  { email: "admin@cookit.com", password: "12345", name: "Pepe" }
];

export const checkUser = (form) => {
  return users.find((user) => {
    return form.email === user.email && form.password === user.password;
  });
};
