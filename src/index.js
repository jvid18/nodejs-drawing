import express from 'express';
import path from 'path';
import SocketIO from 'socket.io';
import http from 'http';

// Initialization
const app = express();
const serve = http.createServer(app);

const io = SocketIO(serve);

// Settings
app.set('port', process.env.PORT ||  3000);

// Middlewares

// Sockets
import sockets from './sockets';
sockets(io);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
async function main() {
	await serve.listen(app.get('port'));

	console.log('Server on port ', 3000);
}

main();
