import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../../store/hooks";
import { Button } from "../../../ui/button/button"
import { Input } from "../../../ui/input/input"
import { createUser } from "../auth.actions";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const allFIeldsFilled = name && email && password && passwordConfirm;

    const handleSubmit = () => {
        if (allFIeldsFilled) {
            if (password !== passwordConfirm) {
                setError(true)
                return;
            }

            dispatch(createUser({ username: name, email, password }));
        }
    }

    useEffect(() => {
        setError(false);
    }, [name, email, password, passwordConfirm]);

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <Input
                label="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                label="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Пароль" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                label="Подтвердить пароль" type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit" disabled={!allFIeldsFilled}>Готово</Button>
            {error && <p>Пароли не совпадают</p>}
        </form>
    )
}