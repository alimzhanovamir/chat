import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { AppContext } from "../../application";
import { Header } from "../../features/header/header";
import { Messages } from "../../features/messages/messages";
import { MessageField } from "../../features/messages/_message-field/message-field";
import "./room.scss";


type Room = {
    id: number;
    name: string;
    user: string;
}

export type MessageType = {
    user: string;
    username: string;
    text: string;
}

export const RoomScreen = () => {
    const { id: roomId } = useParams();
    const socketRef = useRef<Socket>();
    const { token, userData } = useContext(AppContext);
    const [roomData, setRoomData] = useState<Room>({} as Room);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [messageText, setMessageText] = useState<string>('');

    // console.log("render", { roomId, userData, roomData });

    useEffect(() => {
        getChatById(token, roomId, setRoomData);
        getRoomMessages(token, roomId, setMessages);
    }, [roomId]);

    useEffect(() => {

        socketRef.current = io("http://localhost:3000");

        console.log("useEffect fire");

        socketRef.current.emit("join", roomId);

        socketRef.current.on("disconnect", () => {
            console.log("disconnect");
        });

        socketRef.current.on("message", ({ user, username, text }) => {
            console.log("message", { user, username, text });
            setMessages((messages) => [...messages, { user, username, text }])
        });

        return () => {
            console.log("unmount");
            socketRef.current.emit("leave", roomId);
        }
    }, [roomId]);

    useEffect(() => {
        if (messageText) {
            console.log("Send", { roomId, user: userData.email, text: messageText });
            socketRef.current.emit(
                "message",
                { roomId, user: userData.email, username: userData.username, text: messageText },
                ({ user, username, text }: { user: string, username: string, text: string }) => {
                    setMessages((messages) => [...messages, { user, username, text }])
                }
            );
            setMessageText('');
        }
    }, [messageText]);

    return (
        <div className="room-screen">
            <Header>{`Чат: ${roomData.name}`}</Header>
            <Messages messages={messages} currentUser={userData.email}/>
            <MessageField messages={messages} setMessageText={setMessageText} setMessages={setMessages} />
        </div>
    )
}

async function getChatById(token: string, roomId: string, setChatData: (roomData: Room) => void) {
    try {
        const res = await fetch(`http://localhost:3000/room/${roomId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const data = await res.json();

        setChatData(data);

    } catch (error) {
        console.error(error);
    }
}

async function getRoomMessages(token: string, roomId: string, setMessages: (messages: MessageType[]) => void) {
    try {
        const res = await fetch(`http://localhost:3000/messages/${roomId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (res.ok) {
            const data = await res.json();
            setMessages(data);
        }

    } catch (error) {
        console.error({error});
    }
}