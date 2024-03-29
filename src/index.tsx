import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
