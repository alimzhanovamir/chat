import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../application";
import { Button } from "../../../../ui/button/button";
import "./chats.scss";

const cssPrefix = 'chats';

export const Chats = () => {
    const { token } = useContext(AppContext);
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        getChats(token, setChats);
    }, [token]);

    return (
        <ul className={`${cssPrefix}`}>
            {chats.map(({ id, name }) => (
                <li className={`${cssPrefix}__item`}>
                    <Link type='link' to={`/chat/${id}`}>
                        <span>{name}</span>
                    </Link>
                </li>
            ))}
            
        </ul>
    );
};

async function getChats(token: string, setChats: (chats: Chat[]) => void) {
    // console.log(JSON.stringify(token));
    
    try {
        const res = await fetch("http://localhost:3000/chats", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const chats = await res.json();
        console.log({chats});
        
        setChats(chats);

    } catch (error) {
        console.error(error);
    }
}

type Chat = {
    id: number;
    name: string;
}