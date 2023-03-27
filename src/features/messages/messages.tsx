import { Message } from "./_message/message";
import "./messages.scss";

const cssPrefix = 'messages';

type MessageType = {
    author: string;
    text: string;
}

export const Messages = ({ messages }:{ messages: MessageType[]}) => {
    return (
        <div className={cssPrefix}>
            {messages.map((message) => {
                const right = message.author === 'Amir';
                return <Message author={message.author} text={message.text} right={right}/>
            })}
        </div>
    )
};