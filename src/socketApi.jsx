import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Sunucuya baglanılıyor...")
    socket = io('http://localhost:3002',{
        transports:["websocket"],
    });

    socket.on("connect", ()=> console.log("Sunucuya basarili bir sekilde baglanildi."))
}