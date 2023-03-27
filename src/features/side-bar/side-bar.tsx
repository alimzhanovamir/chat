import { Chats } from "./_lists/_chats/chats";
import "./side-bar.scss";
import { useContext } from "react";
import { AppContext } from "../../application";

const cssPrefix = 'side-bar';

export const SideBar = () => {
    const { userData, removeToken } = useContext(AppContext);
    console.log({userData});
    
    return (
        <aside className={cssPrefix}>
            <header className={`${cssPrefix}__header`}>
                <span>{userData?.username}</span>
                <button className={`${cssPrefix}__button`} onClick={() => {}}>+</button>
            </header>
            <Chats />
            <footer className={`${cssPrefix}__footer`}>
                <button className={`${cssPrefix}__button`} onClick={removeToken}>Выйти</button>
            </footer>
        </aside>
    )
}