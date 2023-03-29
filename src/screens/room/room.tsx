import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../ui/header/header";
import { Messages } from "../../features/messages/messages";
import { fetchRoomInfo } from "../../features/room/room.actions";
import { useDispatch, useSelector } from "../../store/hooks";
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
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.room);

    useEffect(() => {
        dispatch(fetchRoomInfo(Number(roomId)));
    }, [roomId]);

    return (
        <div className="room-screen">
            <Header>{`Чат: ${name}`}</Header>
            <Messages roomId={roomId} />
        </div>
    )
}
