db.createUser({
  user: "Christopher",
  pwd: "chris",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase",
  ],
});
