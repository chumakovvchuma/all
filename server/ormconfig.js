const AdminUser = require("nestjs-admin").AdminUserEntity;

module.exports = {
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: "chumakovv",
  password: "chumakovv",
  database: "postgres",
  entities: [__dirname + "/dist/**/*.entity.js", AdminUser],
  migrations: ["dist/migration/*.js"],
  synchronize: true,
};
