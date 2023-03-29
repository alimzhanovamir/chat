import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Application } from './application';
import './index.scss';
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.querySelector('#root'),
);
