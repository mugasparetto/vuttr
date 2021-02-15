import express from 'express';
import jsonServer from 'json-server';
import cors from 'cors';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(cors());
server.use(express.static(path.join(__dirname, 'client/build')));

server.use(router);
server.listen(process.env.PORT || 8080, () => {
  console.log('JSON Server is running');
});
