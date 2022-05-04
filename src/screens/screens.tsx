import { Routes, Route, useRoutes } from 'react-router-dom';
import { getRoutes } from './routes';

import './screens.scss';

export const Screens = () => {
  const routes = useRoutes(getRoutes(true))

  return (
    <main className="screens">
      {routes}
    </main>
  )
}