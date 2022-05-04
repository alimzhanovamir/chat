import PropTypes from 'prop-types';
import { Button } from '../../ui/button/button';
import './header.scss';
const cssPrefix = 'header';

interface HeaderInterface {
  children: string
}

export const Header = ({ children: screenName }: HeaderInterface) => {
  return (
    <header className={cssPrefix}>
      <ul className={`${cssPrefix}-list`}>
        <li className={`${cssPrefix}-lis__item`}>
          <Button onClick={() => history.back()}>&#11013;</Button>
        </li>
        <li className={`${cssPrefix}-lis__item`}>
          { screenName }
        </li>
        <li className={`${cssPrefix}-lis__item`}>
        <Button onClick={() => alert('Action!!')}>&#128394;</Button>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};