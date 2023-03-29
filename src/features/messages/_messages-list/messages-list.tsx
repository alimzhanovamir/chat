import { Virtuoso } from "react-virtuoso";
import { memo, useEffect } from "react";
import { Message } from "../_message/message";
import { useDispatch, useSelector } from "../../../store/hooks";
import { fetchMessages } from "../messages.actions";
import "./messages-list.scss";


type MessagesListType = {
    roomId: string;
};

const cssPrefix = "messages-list";

export const MessagesList = memo(({ roomId }: MessagesListType) => {
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state.messages);
    const { user: currentUser } = useSelector((state) => state.auth);
    
    useEffect(() => {
        dispatch(fetchMessages(roomId))
    },[roomId]);

    console.log(messages);
    

    if (messages.length === 0) return (
        <div className={cssPrefix}>
            <span className={`${cssPrefix}__stub`}>Нет сообщений</span>
        </div>    
    );

    return (
        <Virtuoso
            data={messages}
            initialTopMostItemIndex={messages.length - 1 < 1 ? 1 : messages.length - 1}
            followOutput={"smooth"}
            itemContent={(_, message) => {
                const right = message.user === currentUser.email;
                return <Message author={message.username} text={message.text} right={right}/>
            }}
        />    
    );
});