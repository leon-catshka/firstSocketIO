const express = require('express')
//const socketio = require('socket.io')

const PORT = PORT = process.env.PORT || 3000

const server = express()

server.listen(PORT, () => {
    console.log('Yo whassup, server is running')
})

server.get('/', (req, res) => {
    res.send('<h2>Running Server with SocketIO</h2>')
})