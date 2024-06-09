const express = require('express');
const http = require('http');
const { Pool } = require('pg');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'chat_app_db',
  password: 'your-password',
  port: 5432,
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', async (msg) => {
    try {
      const result = await pool.query(
        'INSERT INTO messages (user_id, chat_room_id, content) VALUES ($1, $2, $3) RETURNING id',
        [msg.userId, msg.chatRoomId, msg.content]
      );
      io.emit('chat message', msg);
    } catch (err) {
      console.error('Error inserting message', err.stack);
    }
  });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
