import { memo, useEffect, useRef } from "react";
import { MessagesList } from "./_messages-list/messages-list";
import { MessageField } from "./_message-field/message-field";
import { io, Socket } from "socket.io-client";

type MessageType = {
    roomId: string;
};

const socket = io("http://localhost:3000");

export const Messages = memo(({ roomId }: MessageType) => {
    const socketRef = useRef<Socket>(null);
    
    useEffect(() => {
        // socketRef.current = io("http://localhost:3000");
        // socketRef.current.emit("join", roomId);
        // socketRef.current.on("disconnect", () => {
        //     console.log("disconnect");
        // });

        socket.emit("join", roomId);

        return () => {
            console.log("unmount");
            socket.emit("leave", roomId);
        }
    }, [roomId]);

    console.log({ socketRef: socketRef.current });
    
    
    return (
        <>
            <MessagesList roomId={roomId} />
            <MessageField socket={socket} roomId={roomId} />
        </>  
    );
});