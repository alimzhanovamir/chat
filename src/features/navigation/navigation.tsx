import { Button } from '../../ui/button/button';
import './navigation.scss';

const cssPrefix = 'navigation';

export const Navigation = () => {
  return (
    <nav className={cssPrefix}>
      <ul className={`${cssPrefix}__list`}>
        <li className={`${cssPrefix}__list-item`}><Button type='link' to='/'>&#128233;</Button></li>
        <li className={`${cssPrefix}__list-item`}><Button type='link' to='/profile'>&#128100;</Button></li>
      </ul>
    </nav>
  )
}