import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    author: string;
    text: string;
}

const defaultMessages: MessageType[] = [
    {
        author: 'Lida',
        text: 'Hello',
    },
    {
        author: 'Amir',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Amir',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Amir',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Lida',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Lida',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Amir',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        author: 'Lida',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
]

export const RoomScreen = () => {
    const { id, ...par } = useParams();
    const { token } = useContext(AppContext);
    const [roomData, setRoomData] = useState<Room>({} as Room);
    const [messages, setMessages] = useState<MessageType[]>(defaultMessages);

    console.log("render", { id, par, roomData });


    useEffect(() => {
        getChatById(token, id, setRoomData);
    }, [id]);

    return (
        <div className="room-screen">
            <Header>{`Чат: ${roomData.name}`}</Header>
            <Messages messages={messages} />
            <MessageField messages={messages} setMessages={setMessages} />
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
        console.log({ data });

        setChatData(data);

    } catch (error) {
        console.error(error);
    }
}