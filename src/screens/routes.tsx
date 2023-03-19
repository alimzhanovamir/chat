import { ReactNode } from 'react';
import { MesssagesScreen } from './messages/messages';
import { ProfileScreen } from './profile/profile';
import { SignInScreen } from './sign-in/sign-in';

interface route {
  path: string,
  element: ReactNode,
}

const getRoute = (path: string, element: ReactNode)  => ({ path, element });

export const getRoutes = (isAuthorized: boolean): route[] => {
  if (!isAuthorized) return [getRoute('/', <SignInScreen />)]

  return [
    getRoute('/', <MesssagesScreen />),
    getRoute('chats/:id', <MesssagesScreen />),
    getRoute('/profile', <ProfileScreen />),
    getRoute('/signIn', <SignInScreen />),
  ]
}