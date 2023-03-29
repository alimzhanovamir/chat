import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "../../../store/hooks";
import { fetchRooms } from "./rooms.actions";
import "./rooms.scss";

const cssPrefix = "rooms";

export const Rooms = () => {
    const dispatch = useDispatch();
    const rooms: RoomType[] = useSelector((state) => state.rooms.rooms);

    useEffect(() => {
        dispatch(fetchRooms());
    }, [])

    return (
        <ul className={`${cssPrefix}`}>
            {rooms.map(({ id, name }) => (
                <li key={id} className={`${cssPrefix}__item`}>
                    <NavLink type="link" to={`/room/${id}`}>
                        <span>{name}</span>
                    </NavLink>
                </li>
            ))}
            
        </ul>
    );
};

export type RoomType = {
    id: number;
    name: string;
}