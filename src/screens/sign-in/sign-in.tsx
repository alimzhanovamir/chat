import { Header } from "../../features/header/header"
import { Input } from "../../ui/input/input"

export const SignInScreen = () => {
  return (
    <>
      <div>
        <div>Sign in</div>
        <Input label='login' />
        <Input label='password' type='password' />
      </div>
    </>
  )
}