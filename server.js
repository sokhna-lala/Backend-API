const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

server.use(router);

const PORT = Number(process.env.PORT) || 3001;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
