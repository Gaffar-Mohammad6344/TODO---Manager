const socketIO = require('socket.io');

let io;

exports.initializeSocket = (server) => {
  io = socketIO(server, { cors: { origin: '*' } });
  return io;
};

exports.emitTaskCreated = (task) => {
  if (io) io.emit('taskCreated', task);
};
