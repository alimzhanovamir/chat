import './application.scss'
import { Authenticate } from './features/authenticate/authenticate'

export const Application = () => {
  
  return (
    <div className="application">
      <Authenticate />
    </div>
  )
}
