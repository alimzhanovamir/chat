import { Routes, Route } from 'react-router-dom';
import { MesssagesScreen } from './messages/messages';
import { ProfileScreen } from './profile/profile';

import './screens.scss';

export const Screens = () => {
  return (
    <main className="screens">
      <Routes>
        <Route path='/' element={<MesssagesScreen />}/>
        <Route path='/profile' element={<ProfileScreen />}/>
      </Routes>
    </main>
  )
}