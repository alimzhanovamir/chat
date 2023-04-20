import './application.scss'
import { Screens } from './screens/screens';
import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './features/side-bar/side-bar';
import { AuthScreen } from './screens/auth/auth';
import { createContext } from 'react';
import { useSelector } from "./store/hooks";

export type AuthDataType = {
    token: string;
    userData: {
        id: number;
        username: string;
        email: string;
    }
}

export const AppContext = createContext(null);

export const Application = () => {
    const { token } = useSelector((state) => state.auth);
    const isAuth = Boolean(token);
    console.log({token});

    if (!isAuth && window.location.pathname !== '/') {
        window.location.href = '/';
    }


    return (
        <div className="application">
            <div className="application__inner">
                <BrowserRouter>
                    {
                        isAuth
                        ? (
                            <>
                                <SideBar />
                                <Screens />
                            </>
                        )
                        : <AuthScreen />
                    }
                </BrowserRouter>
            </div>
        </div>
    )
}
