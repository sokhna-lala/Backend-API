import jsonServer from "json-server";
import cors from "cors";

// Création du serveur JSON Server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware CORS pour React
server.use(cors());
server.use(middlewares);

// Route de santé (facultative, utile pour Render)
server.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Routes JSON Server
server.use(router);

// ⚠️ PORT dynamique fourni par Render, converti en nombre
const PORT: number = Number(process.env.PORT) || 3001;

// Démarrage du serveur sur 0.0.0.0 pour qu'il soit accessible depuis Render
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
  console.log(`🌍 Accessible depuis Render`);
});
