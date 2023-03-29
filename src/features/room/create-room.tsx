import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../store/hooks";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { createRoom } from "./create-room.actions";
import "./create-room.scss";

const cssPrefix = "create-room-form";

export const CreateRoomForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [roomName, setRoomName] = useState<string>("");

    return (
        <form
            className={cssPrefix}
            onSubmit={(e) => {
                e.preventDefault();
                if (roomName) {
                    dispatch(createRoom({ roomName, navigate }));
                    setRoomName("");
                }
            }}
        >
            <Input
                label="Название чата"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)} />

            <Button
                type="submit"
                disabled={!roomName}
            >Создать</Button>
        </form>
    )
}