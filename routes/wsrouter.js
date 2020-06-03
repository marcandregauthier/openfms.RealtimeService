import WebSocket from '../pkg/websocket/';
import String from '../pkg/string';


const webSocket = new WebSocket((socket, message) => {
    const Entity = String.parseJSON(message);
    if (!Entity || !Entity.messageType) {
        socket.send('{ "statuscode": 400, "error": "Bad format" }');
        return;
    }

    socket.send('{ "statuscode": 200 }');
});


export default webSocket;