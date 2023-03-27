import './application.scss'
import { Screens } from './screens/screens';
import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './features/side-bar/side-bar';
import { AuthScreen } from './screens/auth/auth';
import { createContext, useCallback, useState } from 'react';

type AuthDataType = {
    token: string;
    userData: {
        id: number;
        username: string;
        email: string;
    }
}

export const AppContext = createContext(null);

export const Application = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));
    const saveAuthData = useCallback((data: AuthDataType): void => {
        console.log('saveAuthData', {data});
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.userData));
        setToken(data.token);
        setUserData(data.userData)
    }, []);

    const removeToken = useCallback((): void => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setToken('');
    }, []);

    const isAuth = Boolean(token);

    return (
        <AppContext.Provider value={{ token, userData, saveAuthData, removeToken }}>
            <div className="application">
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
        </AppContext.Provider>

    )
}
