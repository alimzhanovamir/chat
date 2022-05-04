import { ReactNode } from 'react';
import { MesssagesScreen } from './messages/messages';
import { ProfileScreen } from './profile/profile';
import { SignInScreen } from './sign-in/sign-in';

interface route {
  path: string,
  element: ReactNode,
}

export const getRoutes = (isAuthorized: boolean): route[] => {
  const getRoute = (path: string, element: ReactNode)  => ({ path, element: isAuthorized ? element : <SignInScreen />})
  
  return [
    getRoute('/', <MesssagesScreen />),
    getRoute('/profile', <ProfileScreen />),
    getRoute('/signIn', <SignInScreen />),
  ]
}