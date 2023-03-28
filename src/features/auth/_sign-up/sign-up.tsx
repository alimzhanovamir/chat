import { Button } from "../../../ui/button/button"
import { Input } from "../../../ui/input/input"

export const SignUp = () => {

    return (
        <div>
            <Input
                label="Имя"
                value=""
                onChange={() => {}}
            />
            <Input
                label="e-mail"
                value=""
                onChange={() => {}}
            />
            <Input
                label="Пароль" type="password"
                value=""
                onChange={() => {}}
            />
            <Input
                label="Подтвердить пароль" type="password"
                value=""
                onChange={() => {}}
            />
            <Button onClick={() => {}}>Готово</Button>
        </div>
    )
}