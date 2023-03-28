import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { createChat } from "../../api/api";
import { AppContext } from "../../application";
import { CreateRoomForm } from "../../features/room";
import { Header } from "../../features/header/header";

export const CreateRoomScreen = () => {
    const { token, userData } = useContext(AppContext);
    const [chatId, setChatId] = useState('')

    if (chatId) {
        return <Navigate to={`/room/${chatId}`} />;
    }

    return (
        <>
            <Header>Создание чата</Header>
            <CreateRoomForm
                onChange={async (roomName) => {
                    const chatId = await createChat(token, roomName, userData.email)
                    console.log({ chatId });
                    
                    setChatId(chatId);
                }} 
            />
        </>
    )

}
