export default (io) => {

  const line_history = [];

  io.on('connection', (socket) => {
    console.log('New connection');

    line_history.forEach((_, i) => {
      socket.emit('draw_line', { line: line_history[i] });
    })

    socket.on('draw_line', ({ line }) => {
      line_history.push(line);
      io.sockets.emit('draw_line', { line });
    })
  });
}
