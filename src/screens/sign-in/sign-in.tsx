import { Header } from "../../features/header/header"

export const SignInScreen = () => {
  return (
    <>
      <Header>Sign in</Header>
      <div>
        <label htmlFor="login">Login:</label>
        <br />
        <input id="login" type="text" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input id="password" type="text" />
      </div>
    </>
  )
}