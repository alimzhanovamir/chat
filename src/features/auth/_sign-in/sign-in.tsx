import { useState } from "react";
import { useDispatch } from "../../../store/hooks";
import { Button } from "../../../ui/button/button";
import { Input } from "../../../ui/input/input";
import { authRequest } from "../auth.actions";

export const SignIn = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

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

            <Button onClick={() => dispatch(authRequest({ login, password }))}>Войти</Button>
        </div>
    )
}