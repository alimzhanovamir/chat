import { Chats } from "./_lists/_chats/chats";
import "./side-bar.scss";

const cssPrefix = 'side-bar';

export const SideBar = () => {
    return (
        <aside className={cssPrefix}>
            <header className={`${cssPrefix}__header`}>Chats</header>
            <Chats />
        </aside>
    )
}