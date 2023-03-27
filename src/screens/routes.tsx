import { ReactNode } from 'react';
import { MesssagesScreen } from './messages/messages';
import { ProfileScreen } from './profile/profile';
import { AuthScreen } from './auth/auth';

interface route {
  path: string,
  element: ReactNode,
}

const getRoute = (path: string, element: ReactNode)  => ({ path, element });

export const getRoutes = (): route[] => {
  return [
    // getRoute('/', <MesssagesScreen />),
    getRoute('chat/:id', <MesssagesScreen />),
    getRoute('/profile', <ProfileScreen />),
    getRoute('/auth', <AuthScreen />),
  ]
}