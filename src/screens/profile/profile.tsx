import { Link } from "react-router-dom";
import { Header } from "../../features/header/header";

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
      <Link type='link' to='/signIn'>Sing-In</Link>
    </>
  )
}