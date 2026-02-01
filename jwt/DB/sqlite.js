const sqlite3 = require('sqlite3').verbose();
const path = require('path'); // path handel

// create sqlite database on DB folder
const dbPath = path.resolve(__dirname, 'user.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error: ", err.message);
    } else {
        console.log("Connected to SQLite database in DB folder.");
    }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )`);
});

module.exports = db;