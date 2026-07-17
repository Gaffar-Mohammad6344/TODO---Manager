const socketIO = require('socket.io');
const eventHandlers = require('./eventHandlers');

module.exports = (server) => {
  const io = socketIO(server, { cors: { origin: '*' } });
  io.on('connection', (socket) => {
    eventHandlers(socket, io);
  });
  return io;
};
