import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "../../store/hooks";
import { Messages } from "../messages/messages"
import { fetchRoomInfo } from "./room.actions";



export const Room = () => {
    const { id: roomId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRoomInfo(Number(roomId)));
    }, []);
    
    return (
        <Messages roomId={roomId}/>    
    )
}