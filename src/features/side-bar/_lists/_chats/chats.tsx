import { Button } from "../../../../ui/button/button";
import "./chats.scss";

const cssPrefix = 'chats';

export const Chats = () => {
    const chatsList = [
        {
            id: 0,
            name: 'Chat 1',
            avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
            lastMessage: 'Hello, world!',
        },
        {
            id: 1,
            name: 'Chat 2',
            avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
            lastMessage: 'Hello, world!',
        },
        {
            id: 2,
            name: 'Chat 3',
            avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
            lastMessage: 'Hello, world!',
        },
    ];
    return (
        <ul className={`${cssPrefix}__list`}>
            {chatsList.map(({ name, lastMessage }, idx) => (
                <li className={`${cssPrefix}__list-item`}>
                    <Button type='link' to={`/chats/${idx}`}>
                        <span>{name}</span>
                        <br />
                        <span>{lastMessage}</span>
                    </Button>
                </li>
            ))}
            
        </ul>
    );
};