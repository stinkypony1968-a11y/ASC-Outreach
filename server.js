const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const htmlPath = path.join(__dirname, "public", "index.html");

const server = http.createServer((req, res) => {
  // Serve the single HTML file for all routes
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=3600",
  });
  fs.createReadStream(htmlPath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`ASC Workspace running on port ${PORT}`);
});
