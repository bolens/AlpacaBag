module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "travel_db",
    host: "localhost",
    dialect: "mysql",
    // pool: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.JAWS_USERNAME,
    password: process.env.JAWS_PASSWORD,
    database: process.env.JAWS_DB,
    host: process.env.JAWS_HOST,
    dialect: "mysql"
  }
}
