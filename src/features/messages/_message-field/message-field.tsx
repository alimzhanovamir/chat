import { useState } from "react";
import { Socket } from "socket.io-client";
import { useDispatch, useSelector } from "../../../store/hooks";
import { Button } from "../../../ui/button/button";
import { addMessage } from "../messages.slice";
import "./message-field.scss";


type MessagesFiledType = {
    socket: Socket;
    roomId: string;
};

const cssPrefix = "message-field";

export const MessageField = ({ socket, roomId }: MessagesFiledType) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [value, setValue] = useState("");

    console.log({ socket });
    

    const handleSubmit = () => {
        console.log(user, { roomId, user: user.email, username: user.name, text: value });
        
        socket.emit(
            "message",
            { roomId, user: user.email, username: user.name, text: value },
            ({ user, username, text }: { user: string, username: string, text: string }) => {
                dispatch(addMessage({ user, username, text }));
            }
        );
        setValue("");
    }

    return (
        <form
            className={cssPrefix}
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                setValue("");
            }}
        >
            <textarea
                className={`${cssPrefix}__textarea`}
                name=""
                id=""
                cols={30}
                rows={3}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <p className={`${cssPrefix}__bar`}>
                <Button type="submit">Отправить</Button>
            </p>
        </form>
    )
};