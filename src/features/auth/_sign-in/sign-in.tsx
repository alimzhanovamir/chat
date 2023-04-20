import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../store/hooks";
import { Button } from "../../../ui/button/button";
import { Input } from "../../../ui/input/input";
import { authRequest } from "../auth.actions";
import { removeAuthError } from "../auth.slice";

export const SignIn = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const error: string | null = useSelector((state) => state.auth.error);

    useEffect(() => {
        if (error) {
            dispatch(removeAuthError());
        }
    }, [login, password]);

    return (
        <div>
            <Input
                label="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />

            <Input
                label="Пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                disabled={!login || !password}
                onClick={() => dispatch(authRequest({ login, password }))}
            >Войти</Button>
            {error && <p>{error}</p>}
        </div>
    )
}