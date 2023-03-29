import classnames from "classnames";
import "./message.scss";

const cssPrefix = "message";


type MessageProps = {
    author: string;
    text: string;
    timestamp?: string;
    right?: boolean;
}

export const Message = ({ author, text, timestamp, right }: MessageProps) => (
    <div
        className={classnames(cssPrefix,{
            right,
        })}
    >
        <div className={`${cssPrefix}__inner`}>
            <h2 className={`${cssPrefix}__author`}>{author}</h2>
            <p className={`${cssPrefix}__text`}>{text}</p>
        </div>
    </div>
);


export type MessageType = {
    user: string;
    username: string;
    text: string;
}