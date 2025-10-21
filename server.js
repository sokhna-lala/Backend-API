const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Utiliser le port fourni par Render ou 3001 en local
const PORT = process.env.PORT || 3001;

// Middleware CORS
server.use(cors());
server.use(middlewares);

// Route de santé (facultative, utile pour Render)
server.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Routes de json-server
server.use(router);

// ⚠️ La différence importante est ici :
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
  console.log(`🌍 Accessible on: http://0.0.0.0:${PORT}`);
});
