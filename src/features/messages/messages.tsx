import { memo, useEffect, useRef } from "react";
import { MessagesList } from "./_messages-list/messages-list";
import { MessageField } from "./_message-field/message-field";
import { io, Socket } from "socket.io-client";
import { addMessage, dropMessages } from "./messages.slice";
import { useDispatch } from "../../store/hooks";

type MessageType = {
    roomId: string;
};

const socket = io("http://localhost:3000");

export const Messages = memo(({ roomId }: MessageType) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        socket.emit("join", roomId);
        socket.on("message", (message) => {
            console.log("message", message);
            dispatch(addMessage(message));
        });

        return () => {
            console.log("unmount");
            socket.emit("leave", roomId);
            dispatch(dropMessages())
        }
    }, [roomId]);
    
    return (
        <>
            <MessagesList roomId={roomId} />
            <MessageField socket={socket} roomId={roomId} />
        </>  
    );
});