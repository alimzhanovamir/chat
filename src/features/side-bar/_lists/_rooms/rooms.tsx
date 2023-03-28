import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../../application";
import "./rooms.scss";

const cssPrefix = "rooms";

export const Rooms = () => {
    const { token } = useContext(AppContext);
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        getChats(token, setChats);
    }, [token]);

    return (
        <ul className={`${cssPrefix}`}>
            {chats.map(({ id, name }) => (
                <li key={id} className={`${cssPrefix}__item`}>
                    <NavLink type="link" to={`/room/${id}`}>
                        <span>{name}</span>
                    </NavLink>
                </li>
            ))}
            
        </ul>
    );
};

async function getChats(token: string, setChats: (chats: Chat[]) => void) {
    try {
        const res = await fetch("http://localhost:3000/rooms", {
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