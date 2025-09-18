const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const socketio = require('socket.io')
const server = http.createServer(app);
const io = socketio(server);
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/user');
// set static folder

const botName = 'Chatcord Bot';



io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room)
        socket.join(user.room)
        //welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to chatcord!'));

        //broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has joined the chat`));

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    })


    //listen for chat message
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    })
    //runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            })

        };

    });
})
app.use(express.static(path.join(__dirname, 'public')));


const PORT = 3000 || process.env.PORT;


server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});