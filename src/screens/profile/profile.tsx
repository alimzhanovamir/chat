import { Header } from "../../features/header/header"
import { Button } from "../../ui/button/button"

export const ProfileScreen = () => {
  return (
    <>
      <Header>Profile</Header>
      <div>
        <img src="" alt="" />
        name:  Amir
        <br />
        surename: Alimzhanov
      </div>
      <Button type='link' to='/signIn'>Sing-In</Button>
    </>
  )
}