import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../application";
import { Header } from "../../features/header/header";
import { Messages } from "../../features/messages/messages";
import { MessageField } from "../../features/messages/_message-field/message-field";
import "./messages.scss";


type Chat = {
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

export const MesssagesScreen = () => {
    const { id, ...par } = useParams();
    const { token } = useContext(AppContext);
    const [chatData, setChatData] = useState<Chat>({} as Chat);
    const [messages, setMessages] = useState<MessageType[]>(defaultMessages);

    console.log("render", { id, par, chatData });


    useEffect(() => {
        getChatById(token, id, setChatData);
    }, [id]);

    return (
        <div className="messages-screen">
            <Header>{`Чат: ${chatData.name}`}</Header>
            <Messages messages={messages} />
            <MessageField messages={messages} setMessages={setMessages} />
        </div>
    )
}

async function getChatById(token: string, chatId: string, setChatData: (chatData: Chat) => void) {
    console.log({ chatId });

    try {
        const res = await fetch(`http://localhost:3000/chat/${chatId}`, {
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