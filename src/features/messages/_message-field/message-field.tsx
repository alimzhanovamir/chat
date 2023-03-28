import { useState } from "react";
import { MessageType } from "../../../screens/room/room";
import { Button } from "../../../ui/button/button";
import "./message-field.scss";

const cssPrefix = "message-field";

export const MessageField = ({ messages, setMessages }: { messages: MessageType[], setMessages: ([]) => void }) => {
    const [value, setValue] = useState("");
    return (
        <form
            className={cssPrefix}
            onSubmit={(e) => {
                e.preventDefault();
                // alert(value);
                setMessages([...messages, { author: "Amir", text: value }]);
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