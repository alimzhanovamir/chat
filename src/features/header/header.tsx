import PropTypes from 'prop-types';
import './header.scss';
const cssPrefix = 'header';

interface HeaderInterface {
  children: string
}

export const Header = ({ children: screenName }: HeaderInterface) => {
  return (
    <header className={cssPrefix}>
      <ul className={`${cssPrefix}-list`}>
        <li className={`${cssPrefix}-lis__item`}>&#11013;</li>
        <li className={`${cssPrefix}-lis__item`}>
          { screenName }
        </li>
        <li className={`${cssPrefix}-lis__item`}>&#128394;</li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};