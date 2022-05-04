import './application.scss'
import { Screens } from './screens/screens';
import { Navigation } from './features/navigation/navigation';
import { BrowserRouter } from 'react-router-dom';

export const Application = () => {
  
  return (
    <div className="application">
      <BrowserRouter>
        <Screens />
        <Navigation />
      </BrowserRouter>
    </div>
  )
}
