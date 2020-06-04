const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'ProgWebTrab')));
app.set('views', path.join(__dirname, 'ProgWebTrab'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

let messages = [];
io.on('connection', socket => {
  console.log(`socket conectado: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });
    socket.on('disconnect', data => {
        console.log(`socket disconectado: ${socket.id}`);
    })
});

server.listen(3000, () => {
  console.log('Server rodando em http://localhost:3000');
});
