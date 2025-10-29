// server.js
const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0"; // allows external access on cPanel
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ✅ Health check endpoint
  server.get("/health", (req, res) => res.send("Server is running."));

  // ✅ Serve static files (for cPanel environments)
  server.use("/public", express.static(path.join(__dirname, "public")));

  // ✅ Let Next.js handle everything else
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // ✅ Start the server
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> ✅ Server ready on http://${hostname}:${port}`);
  });
});

