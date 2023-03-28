import PropTypes from "prop-types";
import "./header.scss";
const cssPrefix = "header";

interface HeaderInterface {
  children: string
}

export const Header = ({ children: screenName }: HeaderInterface) => {
  return (
    <header className={cssPrefix}>
      <h1 className={`${cssPrefix}__title`}>{screenName}</h1>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};