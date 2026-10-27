const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();
const HOST = "127.0.0.1";
const PORT = 3000;

const db = new Database(":memory:");
db.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL
  );
  INSERT INTO users (name, email, role) VALUES
    ('Ana Pérez', 'ana@example.test', 'student'),
    ('Bruno Díaz', 'bruno@example.test', 'teacher'),
    ('Carla Gómez', 'carla@example.test', 'admin');
`);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/users/search", (req, res) => {
  const name = String(req.query.name || "");
  const sql = `SELECT id, name, email, role FROM users WHERE name LIKE '%${name}%'`;
  try {
    const rows = db.prepare(sql).all();
    res.json({ data: rows });
  } catch (error) {
    res.status(400).json({ error: error.message, query: sql });
  }
});

app.get("/api/users/:id", (req, res) => {
  const user = db.prepare(
    "SELECT id, name, email, role FROM users WHERE id = ?"
  ).get(Number(req.params.id));

  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json({ data: user });
});

app.listen(PORT, HOST, () => {
  console.log(`Laboratorio local disponible en http://${HOST}:${PORT}`);
});
