import PropTypes from 'prop-types';
import './input.scss';

const cssPrefix = 'input';

interface InputInterface {
  type?: string,
  label?: string,
}

export const Input = ({ type, label, ...props }: InputInterface) => {

  return (
    <label className={cssPrefix}>
      <input className={`${cssPrefix}__field`} type={type} { ...props }/>
      <span className={`${cssPrefix}__label`}>{ label }</span>
    </label>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

Input.defaultPropsTypes = {
  type: 'text',
  label: '',
};