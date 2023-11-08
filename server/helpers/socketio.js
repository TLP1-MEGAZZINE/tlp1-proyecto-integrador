const { Server } = require("socket.io");

async function socketFunction(server) {
    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    })

    io.on("connection", (socket) => {
        console.log("socket funcionando");

        socket.on("message", data => {
            io.emit("message", data)
        })
    })
}

module.exports={
    socketFunction
}