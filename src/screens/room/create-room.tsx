import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { createChat } from "../../api/api";
import { AppContext } from "../../application";
import { CreateRoomForm } from "../../features/room";
import { Header } from "../../features/header/header";

export const CreateRoomScreen = () => {
    return (
        <>
            <Header>Создание чата</Header>
            <CreateRoomForm />
        </>
    )

}
