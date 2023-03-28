import { Message } from "./_message/message";
import "./messages.scss";
import { Virtuoso } from "react-virtuoso";
import { memo } from "react";

const cssPrefix = "messages";

type MessageType = {
    user: string;
    username: string;
    text: string;
}

export const Messages = memo(({ messages, currentUser }:{ messages: MessageType[], currentUser: string}) => {
    // if (!messages.length) return <div className={cssPrefix}>Нет сообщений</div>;
    console.log("render messages", messages.length - 1);
    
    return (
        <Virtuoso
            data={messages}
            initialTopMostItemIndex={messages.length - 1}
            followOutput={"smooth"}
            itemContent={(_, message) => {
                const right = message.user === currentUser;
                return <Message author={message.username} text={message.text} right={right}/>
            }}
        />    
    )

    // return (
    //     <div className={cssPrefix}>
    //         {messages.map((message) => {
    //             const right = message.user === currentUser;
    //             return <Message author={message.username} text={message.text} right={right}/>
    //         })}
    //     </div>
    // )
});