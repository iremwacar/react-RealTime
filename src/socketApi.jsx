import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Sunucuya baglanılıyor...")
    socket = io('http://localhost:5173',{
        transports:["websocket"],
    });

    socket.on("connect", ()=> console.log("Sunucuya basarili bir sekilde baglanildi."))
}

export const send = (color)=>{
    //'' hangi kanal, ne gönderilecek
    socket.emit('newColor',color)
}

export const subscribe =(cb)=>{
    socket.on('receiver',(color)=>{
        console.log(color)
        cb(color)
    })
}