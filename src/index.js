import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const renderAPP = (store) => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
store.subscribe(() => renderAPP(store));
renderAPP(store);
registerServiceWorker();
