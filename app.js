const express = require('express')
const socketio = require('socket.io')

const PORT = process.env.PORT || 3000

const server = express()
    .use((req, res) => res.sendFile(`${__dirname}/webcam.html`))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketio(server);

io.on('connection', socket => {
    console.log('User connected')

    socket.on('frame', data => {
        //console.log(`Received frame from: ${data.uid}`)
        socket.broadcast.emit('frameRecv', data)
    })

    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })
})