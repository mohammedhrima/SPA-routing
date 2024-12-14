import http from 'http';
import path from 'path';
import fs from 'fs';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.join(path.dirname(__filename), './static'); 

const PORT = 3000;

const MimeType = (type) => {
  switch (type) {
    case '.html': return 'text/html';
    case '.js': return 'application/javascript';
    case '.css': return 'text/css';
    case '.json': return 'application/json';
    case '.png': return 'image/png';
    case '.jpeg': return 'image/jpeg';
    default: return 'application/octet-stream';
  }
};

const server = http.createServer((req, res) => {
  let uri = req.url.split('?')[0]; 
  if (uri === '/') uri = path.join(root, 'index.html');
  else uri = path.join(root, uri); 

  fs.stat(uri, (err, stats) => {
    console.log('serve', path.relative(root, uri));

    if (err || !stats.isFile()) {
      console.error(`${uri} Not found!`);
      uri = path.join(root, 'index.html');
      res.writeHead(200, { 'Content-Type': MimeType(path.extname(uri)) });
      createReadStream(uri).pipe(res);
    } else {
      res.writeHead(200, { 'Content-Type': MimeType(path.extname(uri)) });
      createReadStream(uri).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
