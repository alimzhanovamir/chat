import { useState } from "react";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import "./create-room.scss";

const cssPrefix = "create-room-form";

type CreateRoomFormProps = {
    onChange: (chatName: string) => void
}

export const CreateRoomForm = ({ onChange }: CreateRoomFormProps) => {
    const [chatName, setChatName] = useState<string>('');

    return (
        <form
            className={cssPrefix}
            onSubmit={(e) => {
                e.preventDefault();

                if (chatName) { onChange(chatName) }
            }}
        >
            <Input
                label="Название чата"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)} />

            <Button
                type="submit"
                disabled={!chatName}
            >Создать</Button>
        </form>
    )
}