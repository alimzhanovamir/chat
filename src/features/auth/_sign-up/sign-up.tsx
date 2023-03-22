import { Button } from "../../../ui/button/button"
import { Input } from "../../../ui/input/input"

export const SignUp = () => {

    return (
        <div>
            <Input label='Имя' />
            <Input label='e-mail' />
            <Input label='Пароль' type='password' />
            <Input label='Подтвердить пароль' type='password' />
            <Button onClick={() => {}}>Готово</Button>
        </div>
    )
}