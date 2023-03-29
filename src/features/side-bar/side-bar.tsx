import { Rooms } from "./_rooms/rooms";
import "./side-bar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "../../store/hooks";
import { authLogout } from "../auth/auth.actions";

const cssPrefix = "side-bar";

export const SideBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log({ user });
    
    return (
        <aside className={cssPrefix}>
            <header className={`${cssPrefix}__header`}>
                <span>{user.name || ">>"}</span>
                <Link to={"/create"} className={`${cssPrefix}__button`} onClick={() => {}}>+</Link>
            </header>
            <Rooms />
            <footer className={`${cssPrefix}__footer`}>
                <button className={`${cssPrefix}__button`} onClick={() => dispatch(authLogout())}>Выйти</button>
            </footer>
        </aside>
    )
}