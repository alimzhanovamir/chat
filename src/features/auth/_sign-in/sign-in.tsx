import { useState } from "react";
import { Button } from "../../../ui/button/button";
import { Input } from "../../../ui/input/input";

 async function signIn(email: string, password: string, saveAuthData: (token: string) => void) {
    console.log(email, password);

    try {
        const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        console.log({res});
        
        if (res.status === 201) {
            const data = await res.json();
            console.log(data);
            saveAuthData(data);
        }
    } catch (error) {
        console.error(error);
        
    }
}

export const SignIn = ({ saveAuthData }: { saveAuthData: (token: string) => void }) => {
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

            <Button onClick={() => signIn(login, password, saveAuthData)}>Войти</Button>
        </div>
    )
}