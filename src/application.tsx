import './application.scss'
import { Screens } from './screens/screens';
import { BrowserRouter } from 'react-router-dom';
import { SideBar } from './features/side-bar/side-bar';
import { AuthScreen } from './screens/auth/auth';

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
          : <AuthScreen />
        }
      </BrowserRouter>
    </div>
  )
}
