import { Rooms } from "./_lists/_rooms/rooms";
import "./side-bar.scss";
import { useContext } from "react";
import { AppContext } from "../../application";
import { Link } from "react-router-dom";

const cssPrefix = "side-bar";

export const SideBar = () => {
    const { userData, removeToken } = useContext(AppContext);
    
    return (
        <aside className={cssPrefix}>
            <header className={`${cssPrefix}__header`}>
                <span>{userData?.username}</span>
                <Link to={"/create"} className={`${cssPrefix}__button`} onClick={() => {}}>+</Link>
            </header>
            <Rooms />
            <footer className={`${cssPrefix}__footer`}>
                <button className={`${cssPrefix}__button`} onClick={removeToken}>Выйти</button>
            </footer>
        </aside>
    )
}