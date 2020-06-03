import ws from 'ws';


class WebSocket {
    constructor(onMessageEvent) {
        const port = 5500;
        this.connection = new ws.Server({ port: port });

        this.connection.on('connection', socket => {
            console.log('wsConnection')

            socket.on('message', message => {
                console.log(`wsReceived : ${message}`)
                onMessageEvent(socket, message);
            });
        });

        console.log(`ws.${require('../../package.json').name}: ${port}`); 
    }

    send = (message) => {
        this.connection.send(message);
    }
}


export default WebSocket;



/*
ws = new WebSocket("ws://localhost:5500/ws");
ws.onmessage = function (e) {
    console.log(e.data);
};

ws.onopen = function() {
    ws.send('ws.send('{ "id": 112, "messageType": "position" }');');
}
*/