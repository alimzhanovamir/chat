import { Button } from "../../../ui/button/button"
import { Input } from "../../../ui/input/input"

export const SignIn = () => {

    return (
        <div>
            <Input label='Логин' />
            <Input label='Пароль' type='password' />
            <Button onClick={() => {}}>Войти</Button>
        </div>
    )
}