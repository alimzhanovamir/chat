import './application.scss'
import { Screens } from './screens/screens';
import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './features/side-bar/side-bar';
import { SignInScreen } from './screens/sign-in/sign-in';

export const Application = () => {
  const isAuth = false;
  
  return (
    <div className="application">
      <BrowserRouter>
        {
          isAuth
          ? (
            <>
              <SideBar />
              <Screens />
            </>
          )
          : <SignInScreen />
        }
      </BrowserRouter>
    </div>
  )
}
